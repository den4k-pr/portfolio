import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../../store";
import { selectStringValue, updateValues } from "../../store/slices/chooseCategory";
import { categories } from "../../templates/categories";

export const SortList = () => {
    const dispatch = useDispatch();
    const stringValue = useSelector((state: RootState) => selectStringValue(state));

    const handleClick = (value: string, position: number) => {
        dispatch(updateValues({ stringValue: value, numberValue: position }));
    };

    return (
        <ul className="sortList">
            {categories.map(el =>
                <li 
                    key={el.value}
                    onClick={() => handleClick(el.value, el.position)} 
                    className={`sortList-link ${el.value === stringValue ? "sortLinkActive" : ""}`}
                >
                    {el.value}
                </li>
            )}
        </ul>
    );
}
