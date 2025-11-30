import { CheckCircle, Star } from "lucide-react";

interface FeaturesListProps {
  features: string[];
  benefits: string[];
}

export function FeaturesList({ features, benefits }: FeaturesListProps) {
  return (
    <div className="space-y-12">
      {/* Features Section */}
      <div>
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <CheckCircle className="h-6 w-6 text-brand-purple" />
          Key Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 rounded-lg bg-brand-dark-light/50 hover:bg-brand-dark-light transition-colors border border-brand-dark-light"
            >
              <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div>
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Star className="h-6 w-6 text-brand-purple" />
          Key Benefits
        </h3>
        <div className="space-y-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 rounded-lg bg-brand-purple/10 border border-brand-purple/20 hover:bg-brand-purple/20 transition-colors"
            >
              <Star className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
              <span className="text-gray-200 font-medium">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
