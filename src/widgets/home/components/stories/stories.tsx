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

export const Stories: FC<Props> = ({ className }) => {
  const [stories, setStories] = useState<IStory[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedStory, setSelectedStory] = useState<IStory>();

  useEffect(() => {
    async function fetchStories() {
      const data = await Api.stories.getAll();
      setStories(data);
    }

    fetchStories();
  }, []);

  const onClickStory = (story: IStory) => {
    setSelectedStory(story);
    if (story.items.length > 0) {
      setOpen(true);
    }
  };

  return (
    <Container>
      <div className={cn(styles.wrapper, className)}>
        <div className={styles.cards}>
          {stories.length === 0 &&
            [...Array(6)].map((_, index) => (
              <Skeleton key={index} className="h-[250px]" />
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
                <X className={styles.icon} />
              </button>
              <ReactStories
                onAllStoriesEnd={() => setOpen(false)}
                stories={
                  selectedStory?.items.map((item) => ({
                    url: item.sourceUrl,
                  })) || []
                }
                defaultInterval={3000}
                width={520}
                height={800}
              />
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};
