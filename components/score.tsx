"use client"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/libs/table"


export default function Score(props:any) {
    return <div className="absolute left-0 top-0  ...">
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="text-center">All</TableHead>
                    <TableHead className="text-center">Correct №</TableHead>
                    <TableHead className="text-center">Correct %</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell className="text-center">{props.allCounter}</TableCell>
                    <TableCell className="text-center">{props.correctCounter}</TableCell>
                    <TableCell className="text-center">{props.correctPercentCounter}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </div>;
}