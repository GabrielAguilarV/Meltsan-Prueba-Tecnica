import { useState, useMemo } from "react";
import type { Product } from "../interfaces/product-interface";
import { CATEGORIES } from "../constants/categories";

interface FilterCategoryEntry {
    categoria: string;
    categoryProducts: Product[];
}

export const useFilterCategory = (products: Product[]) => {
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [dialogOpen, setDialogOpen] = useState(false);

    const filteredProducts = useMemo(() => {
        return selectedCategory === "all"
            ? products
            : products.filter((p) => p.categoria === selectedCategory);
    }, [products, selectedCategory]);

    const groupedProducts = useMemo(() => {
        return CATEGORIES.reduce((acc, category) => {
            acc[category] = products.filter((p) => p.categoria === category);
            return acc;
        }, {} as Record<string, Product[]>);
    }, [products]);



    const filterCategoryData: FilterCategoryEntry[] = useMemo(() => {
        if (selectedCategory === "all") {
            return CATEGORIES.map((category) => ({
                categoria: category,
                categoryProducts: products.filter((p) => p.categoria === category),
            })).filter(entry => entry.categoryProducts.length > 0);
        } else {
            return [{
                categoria: selectedCategory,
                categoryProducts: products.filter((p) => p.categoria === selectedCategory),
            }];
        }
    }, [selectedCategory, products]);

    return {
        selectedCategory,
        setSelectedCategory,
        dialogOpen,
        setDialogOpen,
        filteredProducts,
        groupedProducts,
        filterCategoryData,


    };
};
