import ContainerComponent from "@/components/container-component";
import Skeleton from "react-loading-skeleton";

export default function Loading() {
  return (
    <ContainerComponent>
      <Skeleton height={100} className="my-2" count={3} />
    </ContainerComponent>
  );
}
