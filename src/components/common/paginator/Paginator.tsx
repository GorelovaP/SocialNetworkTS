import React, {useEffect, useState} from "react";
import s from "./paginator.module.css";

type PaginatorPropsType = {
    totalItemsCount: number;
    pageSize: number;
    paginatorPortion: number;
    setCurrentItem: (item: number, portionNumber: number) => void;
    currentItem: number;
    currentPortion: number

}
export const Paginator = (props: PaginatorPropsType) => {

    useEffect(() => {
        setPortionNumber(props.currentPortion)
    }, [props.currentPortion])

    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(props.totalItemsCount / props.paginatorPortion)

    let [portionNumber, setPortionNumber] = useState<number>(props.currentPortion)
    let leftPortionPageNumber = (portionNumber - 1) * props.paginatorPortion + 1;
    let rightPortionPageNumber = portionNumber * props.paginatorPortion;


    let [leftDisable, setLeftDisable] = useState<boolean>(props.currentPortion === 1)
    let [rightDisable, setRightDisable] = useState<boolean>(props.currentPortion === portionCount)


    return <div className={s.paginator}>

        <button className={s.controlBtn} disabled={leftDisable} onClick={() => {
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
                    return <div
                        key={p}
                        onClick={() => {
                            props.setCurrentItem(p, portionNumber)
                        }}
                        className={`${s.page} ${props.currentItem === p ? s.selectedPage : ''}`}>{p}</div>
                }
            )}

        <button
            disabled={rightDisable}
            className={s.controlBtn}
            onClick={() => {
                if (portionNumber >= portionCount - 1) {
                    setRightDisable(true)
                } else {
                    setPortionNumber(portionNumber + 1)
                    setLeftDisable(false)
                }
            }}>+
        </button>
    </div>

}