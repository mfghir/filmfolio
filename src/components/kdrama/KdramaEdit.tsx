"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { useEditDrama } from "@/lib/mutations";

import { labels, genres, statuses } from "@/lib/data";


type SelectOptions = {
  statuses: string;
  labels: string;
  genres: string;
};


export default function KdramaEdit({ row }: { row: any }): JSX.Element {
  const { mutate } = useEditDrama()
  const { toast } = useToast()
  const pathname = usePathname()

  const [value, setValue] = useState<SelectOptions>({
    statuses: row.original.status,
    labels: row.original.label,
    genres: row.original.genre,
  })
  const [inputValue, setInputValue] = useState<string>(row.original.input);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const editedData = Object.fromEntries(formData);
    const updatedData = {
      ...row.original,
      ...editedData,
      input: inputValue, // Use the preserved input value
    };

    mutate({ id: row.original.id, ...updatedData });
    toast({ variant: "success", title: "با موفقیت ویرایش شد ! ✔" })
  }



  return (
    <Dialog>
      <DialogTrigger asChild>
        {
          pathname === "/dashboard/kdrama-list" &&
          <Button variant="default" size="sm">ویرایش</Button>
        }
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>ویرایش</DialogTitle>
          {/* <DialogDescription>
            What do you want to get done today?
          </DialogDescription> */}

        </DialogHeader>
        <form
          id="drama-form"
          className="grid gap-4 py-4"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="title"
              name="title"
              placeholder="عنوان ..."
              className="col-span-4"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Select
              name="status"
              value={value.statuses}
              onValueChange={
                (val) => setValue({ ...value, statuses: val })
              }
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="یک وضعیت انتخاب کنید" />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  <SelectLabel>انتخاب وضعیت</SelectLabel>
                  {statuses.map((item) =>
                    <SelectItem key={item.label} value={item.value}>
                      {item.label}
                    </SelectItem>
                  )}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Select
              name="label"
              value={value.labels}
              onValueChange={
                (val) => setValue({ ...value, labels: val })
              }
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a label" />
              </SelectTrigger>

              <SelectGroup>
                <SelectLabel>Select a status</SelectLabel>
                <SelectContent>
                  {labels.map((item) =>
                    <SelectItem key={item.label} value={item.value}>
                      {item.label}
                    </SelectItem>
                  )}
                </SelectContent>
              </SelectGroup>
            </Select>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Select
              name="genre"
              value={value.genres}
              onValueChange={
                (val) => setValue({ ...value, genres: val })
              }
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a genre" />
              </SelectTrigger>

              <SelectGroup>
                <SelectLabel>Select a status</SelectLabel>
                <SelectContent>
                  {genres.map((item) =>
                    <SelectItem key={item.label} value={item.value}>
                      {item.label}
                    </SelectItem>
                  )}
                </SelectContent>
              </SelectGroup>
            </Select>
          </div>
        </form>

        <DialogFooter>
          <DialogTrigger asChild>
            <Button type="submit" size="sm" form="drama-form">
              Submit
            </Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>

    </Dialog >
  );
}
