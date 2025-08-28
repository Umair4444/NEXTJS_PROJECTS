import { Button } from "../ui/button";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (page: number | ((prev: number) => number)) => void;
  totalPages: number;
}

const Pagination2: React.FC<PaginationProps> = ({
  currentPage,
  setCurrentPage,
  totalPages,
}) => {
  return (
    <div className="flex justify-center items-center gap-3 mt-16">
      <Button
        variant="outline"
        size="sm"
        className="shadow-sm"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((prev) => prev - 1)}
      >
        Previous
      </Button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Button
          key={page}
          variant={currentPage === page ? "default" : "outline"}
          size="sm"
          className="shadow-sm"
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </Button>
      ))}
      <Button
        variant="outline"
        size="sm"
        className="shadow-sm"
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage((prev) => prev + 1)}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination2;
