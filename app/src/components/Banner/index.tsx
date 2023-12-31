import { BannerContainer, BannerFlag, BannerTags } from "./styles";
import { tags } from "./constants";

import CoffeeCup from "../../assets/CoffeCup.png";
import { TagProps } from "../../interfaces";

export function Banner() {
  return (
    <>
      <BannerContainer>
        <BannerTags>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </div>

          <div>
            {tags.map((tag: TagProps) => {
              return (
                <div key={tag.label}>
                  <BannerFlag bgColor={tag.bgColor}>{tag.icon}</BannerFlag>
                  <span>{tag.label}</span>
                </div>
              );
            })}
          </div>
        </BannerTags>

        <div>
          <img src={CoffeeCup} alt="" />
        </div>
      </BannerContainer>
    </>
  );
}
