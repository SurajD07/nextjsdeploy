import * as lucideIcons from 'lucide-react';
import clsx from 'clsx';

// Create a type-safe icons object
export const icons = Object.fromEntries(
  Object.entries(lucideIcons).filter(([key]) => key !== 'createReactComponent')
) as Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>>;

// Only export createReactComponent if it exists - FIXED VERSION
export const createReactComponent = 'createReactComponent' in lucideIcons 
  ? (lucideIcons as typeof lucideIcons & { createReactComponent?: unknown }).createReactComponent 
  : undefined;

type Icon = keyof typeof icons;

interface LucideProps extends React.SVGProps<SVGSVGElement> {
  icon: Icon;
  title?: string;
}

function Lucide({ icon, className, ...props }: LucideProps) {
  const IconComponent = icons[icon];
  
  if (!IconComponent) {
    console.warn(`Icon "${icon}" not found`);
    return null;
  }

  return (
    <IconComponent
      {...props}
      className={clsx('stroke-1.5', className)}
    />
  );
}

export default Lucide;