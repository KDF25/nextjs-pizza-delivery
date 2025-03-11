import { FC } from 'react';
import styles from './filter.module.scss';
import {
  Button,
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
  ScrollArea,
} from '@shared/ui';
import { ParametersFilter } from '../../parametersFilter';
import { cn } from '@shared/lib';
import { SlidersHorizontal } from 'lucide-react';

interface FilterPageProps {
  className?: string;
}

export const Filter: FC<FilterPageProps> = ({ className }) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className={cn(styles.trigger, className)}>
          <SlidersHorizontal color="orange" size={16} strokeWidth={2} />
        </Button>
      </DrawerTrigger>
      <DrawerContent className={styles.content}>
        <DrawerTitle className="sr-only" />
        <DrawerDescription className="sr-only" />
        <ScrollArea>
          <ParametersFilter className={styles.parameters} />
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
};
