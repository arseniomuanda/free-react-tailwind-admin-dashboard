import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";

interface Product {
  name: string;
  id: string;
  image: string;
  sales: number;
  earnings: string;
  stock: number;
  status: "In Stock" | "Low Stock" | "Out of Stock";
}

const products: Product[] = [
  { name: "Puffer Jacket With Pocket", id: "#PRD-1042", image: "/images/product/product-01.jpg", sales: 320, earnings: "$12,480", stock: 124, status: "In Stock" },
  { name: "Cargo Pants Slim Fit", id: "#PRD-1043", image: "/images/product/product-02.jpg", sales: 286, earnings: "$9,860", stock: 18, status: "Low Stock" },
  { name: "Oxford Cotton Shirt", id: "#PRD-1044", image: "/images/product/product-03.jpg", sales: 254, earnings: "$8,420", stock: 0, status: "Out of Stock" },
  { name: "Running Sneakers Pro", id: "#PRD-1045", image: "/images/product/product-04.jpg", sales: 210, earnings: "$7,180", stock: 76, status: "In Stock" },
  { name: "Leather Ankle Boots", id: "#PRD-1046", image: "/images/product/product-05.jpg", sales: 192, earnings: "$6,540", stock: 9, status: "Low Stock" },
];

const statusColor: Record<Product["status"], "success" | "warning" | "error"> = {
  "In Stock": "success",
  "Low Stock": "warning",
  "Out of Stock": "error",
};

export default function TopProducts() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Top Products
        </h3>
        <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03]">
          See all
        </button>
      </div>
      <div className="max-w-full overflow-x-auto">
        <Table>
          <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
            <TableRow>
              {["Product Name", "Product ID", "Sales", "Earnings", "Stock", "Status"].map(
                (h) => (
                  <TableCell
                    key={h}
                    isHeader
                    className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                  >
                    {h}
                  </TableCell>
                )
              )}
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="py-3">
                  <div className="flex items-center gap-3">
                    <div className="h-[44px] w-[44px] overflow-hidden rounded-md">
                      <img src={product.image} alt={product.name} className="h-[44px] w-[44px] object-cover" />
                    </div>
                    <span className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                      {product.name}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {product.id}
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {product.sales}
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {product.earnings}
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {product.stock}
                </TableCell>
                <TableCell className="py-3">
                  <Badge size="sm" color={statusColor[product.status]}>
                    {product.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
