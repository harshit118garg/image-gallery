import dynamicIconImports from "lucide-react/dynamicIconImports";
import { IconProps } from "../definations/types";
import { Suspense, lazy } from "react";

const fallback = <div style={{ background: "#ddd", width: 20, height: 20 }} />;

const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = lazy(dynamicIconImports[name]);

  return (
    <Suspense fallback={fallback}>
      <LucideIcon {...props} />
    </Suspense>
  );
};

export default Icon;
