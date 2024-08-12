import { useParams } from "react-router-dom"; // to read dynamic URL params
import Shimmer from "./ShimmerUI";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import Item from "./Item";
import ItemList from "./ItemList";

// individual restaurant info
const RestaurantDetails = () => {
  const params = useParams();
  const id = params.resId;

  const restaurantInfoJson = useRestaurantInfo(id);

  // in initial render -> show
  if (!restaurantInfoJson) {
    return <Shimmer items={1} />;
  }

  // restaurant basic info and menu info
  const restaurantBasicDetails =
    restaurantInfoJson?.data?.cards[2]?.card?.card?.info;

  // taking only required json from complete restr info json (excluding -> offers, restr licensing info, etc.)
  const restaurantMenu =
    restaurantInfoJson?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (_) =>
        _.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        _.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );

  // (sectionTitle: items) mapped dictionary
  // ex: Recommended: [Item1, Item2...]
  const sectionTitleToItemsDict = {};

  restaurantMenu.map((_) => {
    if (
      _.card.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) {
      sectionTitleToItemsDict[_.card.card.title] = _.card.card.itemCards;
    }
  });

  // (sectionTitle: subsSections) mapped dictionary (subSection contains (sectionTitle: items) mapping)
  // ex: (Thali: [Veg Thali, Non-Veg Thali]) -> (Veg Thali: [Item1, Item2...])
  const sectionTitleToSubSectionDict = {};

  restaurantMenu.map((_) => {
    if (
      _.card.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    ) {
      sectionTitleToSubSectionDict[_.card.card.title] = _.card.card.categories;
    }
  });

  return (
    <div className="flex flex-col items-center p-2 m-2">
      <div
        data-testid="restr-basic-info"
        className="flex flex-col items-center"
      >
        <h1 className="font-bold text-2xl">{restaurantBasicDetails.name}</h1>
        <br></br>
        <h2 className="font-semibold text-xl py-2">
          {restaurantBasicDetails.cuisines.join(", ")} -{" "}
          {restaurantBasicDetails.costForTwoMessage}
        </h2>
      </div>

      {Object.entries(sectionTitleToItemsDict).map(
        ([sectionTitle, itemsList]) => {
          return (
            <ItemList
              key={sectionTitle}
              title={sectionTitle}
              isSubSection={false}
              children={itemsList.map((item) => {
                return (
                  <Item
                    key={item.card.info.id}
                    name={item.card.info.name}
                    description={item.card.info.description}
                    cost={
                      item.card.info.price
                        ? item.card.info.price
                        : item.card.info.defaultPrice
                    }
                    imageID={item.card.info.imageId}
                  />
                );
              })}
            />
          );
        }
      )}

      {Object.entries(sectionTitleToSubSectionDict).map(
        ([sectionTitle, nestedItemsList]) => {
          return (
            <ItemList
              key={sectionTitle}
              title={sectionTitle}
              isSubSection={false}
              children={nestedItemsList.map((subSection) => {
                return (
                  <ItemList
                    key={subSection.title}
                    title={subSection.title}
                    isSubSection={true}
                    children={subSection.itemCards.map((item) => {
                      return (
                        <Item
                          key={item.card.info.name}
                          name={item.card.info.name}
                          description={item.card.info.description}
                          cost={
                            item.card.info.price
                              ? item.card.info.price
                              : item.card.info.defaultPrice
                          }
                          imageID={item.card.info.imageId}
                        />
                      );
                    })}
                  />
                );
              })}
            />
          );
        }
      )}
    </div>
  );
};

export default RestaurantDetails;
