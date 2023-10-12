"use client";

import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const UpgradeButton = () => {
  return (
    <Button className="w-full">
      Upgrade
      <Zap className="w-4 h-4 ml-2 fill-white" />
    </Button>
  );
};

export default UpgradeButton;
