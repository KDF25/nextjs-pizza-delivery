export type TabsVariant = {
  name: string;
  value: string;
  disabled?: boolean;
};

export interface TabsProps {
  items: readonly TabsVariant[];
  onClick?: (value: TabsVariant['value']) => void;
  value?: TabsVariant['value'];
  className?: string;
}
