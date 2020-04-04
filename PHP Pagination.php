<?php

class Solution
{

    private $items;
    private $sortParameter;
    private $sortOrder;
    private $itemsPerPage;
    private $pageNumber;

    const SORT_MAP = [
        0 => SORT_ASC,
        1 => SORT_DESC
    ];

    public function __construct($items, $sortParameter, $sortOrder, $itemsPerPage, $pageNumber)
    {
        $this->items = $items;
        $this->sortParameter = $sortParameter;
        $this->sortOrder = $sortOrder;
        $this->itemsPerPage = $itemsPerPage;
        $this->pageNumber = $pageNumber;
    }

    public function arraySortByColumn() {
        $sortOrder = self::SORT_MAP[$this->sortOrder];
        $sortCol = [];

        foreach ($this->items as $key=> $row) {
            $sortCol[$key] = $row[$this->sortParameter];
        }

        array_multisort($sortCol, $sortOrder, $this->items);
    }

    public function fetchItemsToDisplay()
    {
        $this->arraySortByColumn();

        $sliceStart = $this->pageNumber * $this->itemsPerPage;
        $paginated = array_slice($this->items, $sliceStart, $this->itemsPerPage);

        return array_column($paginated, 0);
    }
}