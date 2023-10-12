import ContainerComponent from "@/components/container-component";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import UpgradeButton from "@/components/upgrade-button";
import { PLANS } from "@/config/plans";
import { cn } from "@/lib/utils";

import { Check, HelpCircle, Minus } from "lucide-react";

const PricingPage = () => {
  const pricingItems = [
    {
      plan: "Free",
      tagline: "For testing out our app.",
      quota: 1,
      features: [
        {
          text: "Customizeable",
          footnote: "Change colors, background image or position of elements.",
          negative: true,
        },
      ],
    },
    {
      plan: "Pro",
      tagline: "For creation of beautiful Resume.",
      quota: 50,
      features: [
        {
          text: "Customizeable",
          footnote: "Change colors, background image or position of elements.",
          negative: false,
        },
      ],
    },
  ];

  return (
    <>
      <ContainerComponent className="mb-8 mt-24 text-center max-w-5xl">
        <div className="mx-auto mb-10 sm:max-w-lg">
          <h1 className="text-6xl font-bold sm:text-7xl">Plans</h1>
          <p className="mt-5 text-gray-600 sm:text-lg">
            Use free plan to build resume or upgrade to our PRO plan for more
            features.
          </p>
        </div>

        <div className="pt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <TooltipProvider>
            {pricingItems.map(({ plan, tagline, quota, features }) => {
              const price =
                PLANS.find((p) => p.slug === plan.toLowerCase())?.price
                  .amount || 0;

              return (
                <div
                  key={plan}
                  className={cn("relative rounded-2xl bg-white shadow-lg", {
                    "border-2 border-indigo-600 shadow-blue-200":
                      plan === "Pro",
                    "border border-gray-200": plan !== "Pro",
                  })}
                >
                  <div className="p-5">
                    <h3 className="my-3 text-center font-display text-3xl font-bold">
                      {plan}
                    </h3>
                    <p className="text-gray-500">{tagline}</p>
                    <p className="my-5 font-display text-6xl font-semibold">
                      €{price}
                    </p>
                    <p className="text-gray-500">per month</p>
                  </div>

                  <div className="flex h-20 items-center justify-center border-b border-t border-gray-200 bg-gray-50">
                    <div className="flex items-center space-x-1">
                      <p>{quota.toLocaleString()} Resume</p>

                      <Tooltip delayDuration={300}>
                        <TooltipTrigger className="cursor-default ml-1.5">
                          <HelpCircle className="h-4 w-4 text-zinc-500" />
                        </TooltipTrigger>
                        <TooltipContent className="w-80 p-2">
                          How many Resumes you can create.
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </div>

                  <ul className="my-10 space-y-5 px-8">
                    {features.map(({ text, footnote, negative }) => (
                      <li key={text} className="flex space-x-5">
                        <div className="flex-shrink-0">
                          {negative ? (
                            <Minus className="h-6 w-6 text-gray-300" />
                          ) : (
                            <Check className="h-6 w-6 text-indigo-500" />
                          )}
                        </div>
                        {footnote ? (
                          <div className="flex items-center space-x-1">
                            <p
                              className={cn("text-gray-600", {
                                "text-gray-400": negative,
                              })}
                            >
                              {text}
                            </p>
                            <Tooltip delayDuration={300}>
                              <TooltipTrigger className="cursor-default ml-1.5">
                                <HelpCircle className="h-4 w-4 text-zinc-500" />
                              </TooltipTrigger>
                              <TooltipContent className="w-80 p-2">
                                {footnote}
                              </TooltipContent>
                            </Tooltip>
                          </div>
                        ) : (
                          <p
                            className={cn("text-gray-600", {
                              "text-gray-400": negative,
                            })}
                          >
                            {text}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-gray-200" />
                  <div className="p-5">
                    <UpgradeButton />
                  </div>
                </div>
              );
            })}
          </TooltipProvider>
        </div>
      </ContainerComponent>
    </>
  );
};

export default PricingPage;
