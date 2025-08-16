import Image from "next/image";

interface PartnerBrandsProps {
  brandIcon: string;
  name: string;
  width?: number;
  height?: number;
}

const PartnerBrands = ({
  brandIcon,
  name,
  width = 24,
  height = 24,
}: PartnerBrandsProps) => {
  return (
    <div className="mx-8 flex shrink-0 flex-col items-center gap-6 p-5 px-10">
      <div className="flex h-8 w-8 items-center justify-center">
        <Image src={brandIcon} alt={name} width={width} height={height} />
      </div>
      <p className="text-sm font-medium whitespace-nowrap">{name}</p>
    </div>
  );
};

export default PartnerBrands;
