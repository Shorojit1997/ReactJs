import React, { Component } from 'react';
import ReactTable from 'react-table'



class Mytable extends Component {
    render() {
        const tabledata = [{ name: "Sagor", age: "23" }]
        const col = [{ Header: "Name", accessor: "" }, { Header: "Age", accessor: "" }]

        return (
            <div>
                <ReactTable>
                    data={tabledata}
                    columns={col}
                    defaultPageSize={2}
                    pageSizeOptions={[2, 4, 6, 7]}
                </ReactTable>

            </div>
        );
    }
}

export default Mytable;