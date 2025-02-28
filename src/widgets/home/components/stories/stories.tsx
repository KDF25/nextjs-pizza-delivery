'use client';

import { cn } from '@/shared/lib/utils';
import { IStory } from '@entities/stories';
import { Api } from '@shared/services';
import { Container, Skeleton } from '@shared/ui';
import { X } from 'lucide-react';
import { FC, useEffect, useState } from 'react';
import ReactStories from 'react-insta-stories';
import styles from './stories.module.scss';

interface Props {
  className?: string;
}
const aspectRatio = 520 / 800; // Исходное соотношение сторон

const calculateDimensions = (screenWidth: number, screenHeight: number) => {
  let width, height;

  if (screenWidth <= 520) {
    width = Math.max(screenWidth, 0); // Ширина уменьшается пропорционально экрану, но не ниже 0
    height = width / aspectRatio; // Высота пропорциональна ширине
  } else {
    width = 520; // Фиксированная ширина для экранов шире 520
    height = 800; // Фиксированная высота для экранов шире 520
  }

  // Опционально: ограничение высоты до 90% экрана
  if (height > screenHeight * 0.9) {
    height = screenHeight * 0.9;
    width = height * aspectRatio;
  }

  return { width, height };
};

export const Stories: FC<Props> = ({ className }) => {
  const [stories, setStories] = useState<IStory[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedStory, setSelectedStory] = useState<IStory>();
  const [componentWidth, setComponentWidth] = useState(520);
  const [componentHeight, setComponentHeight] = useState(800);

  useEffect(() => {
    async function fetchStories() {
      const data = await Api.stories.getAll();
      setStories(data);
    }

    fetchStories();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const { width, height } = calculateDimensions(screenWidth, screenHeight);
      setComponentWidth(width);
      setComponentHeight(height);
    };

    handleResize(); // Устанавливаем начальные размеры
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const onClickStory = (story: IStory) => {
    setSelectedStory(story);
    if (story.items.length > 0) {
      setOpen(true);
    }
  };
  return (
    <Container className={styles.container}>
      <div className={cn(styles.wrapper, className)}>
        <div className={styles.cards}>
          {stories.length === 0 &&
            [...Array(6)].map((_, index) => (
              <Skeleton
                key={index}
                className="min-w-[150px] max-w-[200px] aspect-[4/5]"
              />
            ))}
          {stories.slice(0, 6).map((story) => (
            <img
              key={story.id}
              onClick={() => onClickStory(story)}
              className={styles.card}
              height={250}
              width={200}
              src={story.previewImageUrl}
            />
          ))}
        </div>
        {open && (
          <div className={styles.stories__wrapper}>
            <div className={styles.stories}>
              <button className={styles.close} onClick={() => setOpen(false)}>
                <X />
              </button>
              <ReactStories
                onAllStoriesEnd={() => setOpen(false)}
                stories={
                  selectedStory?.items.map((item) => ({
                    url: item.sourceUrl,
                  })) || []
                }
                defaultInterval={3000}
                width={componentWidth}
                height={componentHeight}
              />
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};
