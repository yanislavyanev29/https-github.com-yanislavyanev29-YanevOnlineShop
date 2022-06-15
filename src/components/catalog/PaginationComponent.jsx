import { Typography, Pagination } from "@mui/material";
import { Box } from "@mui/system";




export default function AppPagination({metaData,onPageChange}) {
   
    const {currentPage, totalCount, totalPages, pageSize} = metaData;
    return (
        <Box display='flex' justifyContent='space-between' alignItems='center' marginBottom={"20px"}>
            <Typography>
            Displaying {(currentPage-1)*pageSize+1}-
                {currentPage*pageSize > totalCount 
                    ? totalCount 
                    : currentPage*pageSize} of {totalCount} items
            </Typography>
            <Pagination
            
                color="secondary"
                size='large'
                count={totalPages}
                page={currentPage}
                onChange={(e,page) => onPageChange(page)}
                
            />
        </Box>
    )
}