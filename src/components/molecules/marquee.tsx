import { cn } from "@/utils";

const Marquee: React.FC<any> = ({
    items = [],
    className,
    view: View,
    ...rest
}) => {
    const renderItems = items.map((o: any, i: number) => (
        <div className="flex flex-row items-center" key={i}>
            <View {...o} />
            <div className="h-2 w-2 bg-white rounded-full"></div>
        </div>
    ));
    return (
        <div
            className={cn(
                "pointer-events-none w-full flex overflow-hidden",
                className
            )}
            {...rest}
        >
            <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around">
                {renderItems}
            </div>
            <div
                aria-hidden="true"
                className="animate-marquee flex min-w-full shrink-0 items-center justify-around"
            >
                {renderItems}
            </div>
            <div
                aria-hidden="true"
                className="animate-marquee flex min-w-full shrink-0 items-center justify-around"
            >
                {renderItems}
            </div>
        </div>
    );
};

export default Marquee;