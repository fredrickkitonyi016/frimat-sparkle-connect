import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";
import { Building2, Users, Calendar, MapPin } from "lucide-react";

const AnimatedStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (isInView) {
      setStartAnimation(true);
    }
  }, [isInView]);

  const stats = [
    { icon: Building2, label: "Projects Completed", value: 120, suffix: "+" },
    { icon: Users, label: "Clients Served", value: 300, suffix: "+" },
    { icon: Calendar, label: "Years of Experience", value: 5, suffix: "+" },
    { icon: MapPin, label: "Counties Covered", value: 15, suffix: "+" },
  ];

  return (
    <section ref={ref} className="container py-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">
          Our Impact in Numbers
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Building digital solutions across Kenya with proven results and satisfied clients
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map(({ icon: Icon, label, value, suffix }) => (
          <div key={label} className="text-center group">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <Icon size={32} />
              </div>
            </div>
            <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
              {startAnimation ? (
                <CountUp end={value} duration={2.5} suffix={suffix} />
              ) : (
                `0${suffix}`
              )}
            </div>
            <div className="text-sm text-muted-foreground font-medium">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimatedStats;