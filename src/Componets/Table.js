import React from 'react';

import TableHeader from './TableHeader';
import TableBody from './TableBody';
import '../index.css'

export default function Table(props) {

    return (
            <table className="table table-striped table-bordered mt-4 ml-4 mr-4">
                <TableHeader />
                <TableBody contas={props.contas} deleteConta={props.deleteConta} alterConta={props.alterConta} />
            </table>
    )
}
