import {gql} from "@apollo/client";

export const LIST_ITEMS_QUERY = gql`
   query RootQuery($order: String!, $currentPage: Int!, $rowsPerPage: Int!, $filters:[FieldType]){
        getItems(order: $order,currentPage: $currentPage, rowsPerPage: $rowsPerPage, filters: $filters) {
           totalResult
            totalPage
            currentPage
            order
            rowsPerPage
            items {
                id
                name
                date
                mount
                country
                type
                state
                image
            }
          }
}
`;