import React, {useState} from "react";
import s from "../../Users/Users.module.css";

type PaginatorPropsType = {
    totalItemsCount: number;
    pageSize: number;
    paginatorPortion: number;
    setCurrentItem: (item: number) => void;
    currentItem: number;


}
export const Paginator = (props: PaginatorPropsType) => {
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(props.totalItemsCount / props.paginatorPortion)
    let [portionNumber, setPortionNumber] = useState<number>(1)
    let leftPortionPageNumber = (portionNumber - 1) * props.paginatorPortion + 1;
    let rightPortionPageNumber = portionNumber * props.paginatorPortion;

    let [leftDisable, setLeftDisable] = useState<boolean>(true)
    let [rightDisable, setRightDisable] = useState<boolean>(false)


    return <div>

        <button disabled={leftDisable} onClick={() => {
            if (portionNumber === 2) {
                setPortionNumber(portionNumber - 1)
                setLeftDisable(true)
            }
            if (portionNumber > 1) {
                setPortionNumber(portionNumber - 1)
            } else {
                setLeftDisable(true)
                setRightDisable(false)
            }
        }}>-
        </button>
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
                    return <span
                        key={p}
                        onClick={() => {
                            props.setCurrentItem(p)
                            console.log(portionNumber)
                        }}
                        className={`${s.page} ${props.currentItem === p ? s.selectedPage : ''}`}>{p}</span>
                }
            )}

        <button
            disabled={rightDisable}
            onClick={() => {
                if (portionNumber >= portionCount - 1) {
                    setRightDisable(true)
                } else {
                    setPortionNumber(portionNumber + 1)
                    setLeftDisable(false)
                    console.log(portionNumber)
                }
            }}>+
        </button>
    </div>

}