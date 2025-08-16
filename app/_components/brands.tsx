import PartnerBrands from "./partner-brands";

const Brands = () => {
  return (
    <div className="w-full">
      <h3 className="pl-3 text-left text-lg font-semibold">Marcas Parceiras</h3>
      <div className="mt-4 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden">
        <div className="flex items-center gap-6 whitespace-nowrap">
          <PartnerBrands brandIcon="/Nike.svg" name="Nike" />
          <PartnerBrands brandIcon="/Adidas.svg" name="Adidas" />
          <PartnerBrands brandIcon="/Puma.svg" name="Puma" />
          <PartnerBrands brandIcon="/New Balance.svg" name="New Balance" />
          <PartnerBrands brandIcon="/converse.png" name="Converse" />
          <PartnerBrands brandIcon="/polo.png" name="Polo" />
          <PartnerBrands brandIcon="/zara.png" name="Zara" />
        </div>
      </div>
    </div>
  );
};

export default Brands;
