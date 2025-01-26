"use client";

import React from "react";
import LoadingSpinner from "@/components/features/LoadingSpinner";
import { ContactFormProps } from "./contact/ContactForm";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useFetchItem } from "@/lib/reactQueryCutomHooks";

export type TableProps = {
  caption?: string;
  header?: string;
};

// $ Fetch the data from the server and display it in a table.
const ContactMessagesTable = ({ caption, header }: TableProps) => {
  const { data, isPending, isError } = useFetchItem("contacts");
  const contactMessages = data ? JSON.parse(data.body) : [];
  if (isPending) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return (
      <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] items-center text-2xl font-bold">
        There was an error loading the messages...
      </p>
    );
  }

  return (
    <Table className="rounded-lg shadow-white shadow-lg dark:shadow-gray-800 bg-gray-100 dark:bg-gray-800 outline-none border-none">
      {/* // Row 1: Column Titles */}
      <TableHeader>
        <TableRow className="border-b border-b-gray-500 border-opacity-20 rounded-tl-xl rounded-tr-xl">
          <TableHead className="w-[350px] text-fontDark dark:text-fontLight \">
            id
          </TableHead>
          <TableHead className="text-fontDark dark:text-fontLight">
            Name
          </TableHead>
          <TableHead className="text-fontDark dark:text-fontLight">
            Email
          </TableHead>
          <TableHead className="text-fontDark dark:text-fontLight">
            Message
          </TableHead>
        </TableRow>
      </TableHeader>
      {/* // Row 2: Data */}
      <TableBody className="border-l-0 border-r-0">
        {contactMessages.map((item: ContactFormProps) => {
          const { id, username, email, message } = item;
          return (
            <TableRow
              key={id}
              className="border-1 border-b-gray-500 border-b-opacity-10 px-4"
            >
              <TableCell className="font-medium h-[3rem]">{id}</TableCell>
              <TableCell>{username}</TableCell>
              <TableCell>{email}</TableCell>
              <TableCell>{message}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default ContactMessagesTable;
