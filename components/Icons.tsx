import { icons } from 'lucide-react';

const Icon = ({ name, className, size }: {
    name: keyof typeof icons;
    className?: string;
    size?: number;
}) => {
  const LucideIcon = icons[name];

  return <LucideIcon className={className} size={size} />;
};

export default Icon;