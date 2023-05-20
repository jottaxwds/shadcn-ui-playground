import { Icons } from "../components/icons";
import HorizontalMultiToggle, { StateConfigItem } from "../components/ui/multitoggle";

const states: StateConfigItem[] = [
  {
      label: 'Sun',
      stepIcon: <Icons.sun/>,
      value: 'sun',
      background: 'yellow',
      color: 'black',
      isDefault: true,
  },
  {
      label: 'Cloud & Sun',
      stepIcon: <Icons.cloudsun/>,
      value: 'cloudsun',
      background: 'gray',
      color: 'orange',
      isDefault: false,
  },
  {
      label: 'Cloud',
      stepIcon: <Icons.cloud/>,
      value: 'cloud',
      background: 'gray',
      color: 'darkblue',
      isDefault: false,
  },
  {
      label: 'Rain',
      stepIcon: <Icons.rain/>,
      value: 'rain',
      background: 'lightblue',
      color: 'darkgray',
      isDefault: false,
  },
  {
      label: 'Snow',
      stepIcon: <Icons.snow/>,
      value: 'night',
      background: 'darkblue',
      color: 'white',
      isDefault: false,
  },
];

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          DOING THINGS WITH NEXT + SHADCN + TAILWIND...
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          An horizontal multi-toggle:
        </p>
      </div>
      <div className="flex gap-4">
        
        <HorizontalMultiToggle 
          statesConfig={states}
        />
      </div>
    </section>
  )
}
