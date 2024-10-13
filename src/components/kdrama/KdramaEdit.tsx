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

import { labels, genres, statuses, nationalities, sorts } from "@/lib/data";
import { Textarea } from "../ui/textarea";
import { useGoogleTranslate } from "@/utilities/google-translate";


type SelectOptions = {
  statuses: string;
  labels: string;
  genres: string;
  nationality: string,
  sorts: string
};


export default function KdramaEdit({ row, isOpen, onClose }: { row: any, isOpen: boolean, onClose: () => void }): JSX.Element {
  const { mutate } = useEditDrama()
  const { toast } = useToast()
  const pathname = usePathname()

  const [value, setValue] = useState<SelectOptions>({
    statuses: row.original.status,
    labels: row.original.label,
    genres: row.original.genre,
    nationality: row.original.nationality,
    sorts: row.original.sorts,
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

    // mutate({ id: row.original.id, ...updatedData });
    // toast({ variant: "success", title: "با موفقیت ویرایش شد ! ✔" })

    mutate({ id: row.original.id, ...updatedData }, {
      onSuccess: () => {
        toast({ variant: "success", title: "با موفقیت ویرایش شد ! ✔" });
        onClose(); // Close the dialog after successful edit
      },
    });
  }

  const { language } = useGoogleTranslate();
  const [searchTermNationality, setSearchTermNationality] = useState("");
  const [searchTermGenre, setSearchTermGenre] = useState("");

  // Filter nationalities and genres based on search input
  const filteredNationalities = nationalities.filter((item) =>
    item.label.toLowerCase().includes(searchTermNationality.toLowerCase())
  );

  const filteredGenres = genres.filter((item) =>
    item.label.toLowerCase().includes(searchTermGenre.toLowerCase())
  );




  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {/* <DialogTrigger asChild>
        {
          pathname === "/dashboard/kdrama-list" &&
          // <Button variant="default" size="sm">ویرایش</Button>
          <span>ویرایش</span>
        }
      </DialogTrigger> */}

      {/* <DialogHeader>
        <DialogTitle>ویرایش</DialogTitle>
      </DialogHeader> */}



      <DialogContent className="max-w-[280px] md:max-w-[430px]">
        <DialogHeader>
          <DialogTitle className={`mt-4 ${language === "fa" ? "text-right" : "text-left"} `}>
            ویرایش
          </DialogTitle>
          {/* <DialogDescription>
            What do you want to get done today?
          </DialogDescription> */}

        </DialogHeader>
        <form
          id="drama-form"
          className={`grid gap-4 py-4 ${language === "fa" ? "rtl" : "ltr"} `}
          onSubmit={handleSubmit}
        >


          <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-4">
            <Select
              name="label"
              value={value.labels}
              onValueChange={(val) => setValue({ ...value, labels: val })}
            >
              <SelectTrigger className={` ${language === "fa" ? "rtl" : "ltr"} `}>
                <SelectValue placeholder="انتخاب برچسب" />
              </SelectTrigger>

              <SelectContent className={` ${language === "fa" ? "rtl" : "ltr"} `} >
                {labels.map((item) =>
                  <SelectItem key={item.label} value={item.value}>
                    {item.label}
                  </SelectItem>
                )}
              </SelectContent>
            </Select>

            <Select
              name="sort"
              value={value.sorts}
              onValueChange={
                (val) => setValue({ ...value, sorts: val })
              }
            >
              <SelectTrigger className={` ${language === "fa" ? "rtl" : "ltr"} `}>
                <SelectValue placeholder="انتخاب نوع" />
              </SelectTrigger>

              <SelectContent className={` ${language === "fa" ? "rtl" : "ltr"} `} >
                {sorts.map((item) =>
                  <SelectItem key={item.label} value={item.value}>
                    {item.label}
                  </SelectItem>
                )}
              </SelectContent>
            </Select>

            <Select
              name="status"
              value={value.statuses}
              onValueChange={(val) => setValue({ ...value, statuses: val })}
            >
              <SelectTrigger className={` ${language === "fa" ? "rtl" : "ltr"} `}>
                <SelectValue placeholder="انخاب وضعیت" />
              </SelectTrigger>

              <SelectContent className={` ${language === "fa" ? "rtl" : "ltr"} `} >
                {statuses.map((item) =>
                  <SelectItem key={item.label} value={item.value}>
                    {item.label}
                  </SelectItem>
                )}
              </SelectContent>
            </Select>

            <Select
              name="genre"
              value={value.genres}
              onValueChange={
                (val) => setValue({ ...value, genres: val })
              }
            >
              <SelectTrigger className={` ${language === "fa" ? "rtl" : "ltr"} `}>
                <SelectValue placeholder="انتخاب ژانر" />
              </SelectTrigger>

              <SelectContent className={` ${language === "fa" ? "rtl" : "ltr"} `} >
                {/* Search Bar for Genre */}
                <div className="p-2">
                  <Input
                    placeholder="جستجو ژانر"
                    value={searchTermGenre}
                    onChange={(e) => setSearchTermGenre(e.target.value)}
                    className={`w-full ${language === "fa" ? "rtl" : "ltr"}`}
                  />
                </div>
                {/* Display Filtered Genres */}
                {filteredGenres.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              name="nationality"
              value={value.nationality}
              onValueChange={(val) => setValue({ ...value, nationality: val })}
            >
              <SelectTrigger className={` ${language === "fa" ? "rtl" : "ltr"}`}>
                <SelectValue placeholder="ملیت" />
              </SelectTrigger>

              <SelectContent className={` ${language === "fa" ? "rtl" : "ltr"}`}>
                {/* Search Bar for Nationality */}
                <div className="p-2">
                  <Input
                    placeholder="جستجو ملیت"
                    value={searchTermNationality}
                    onChange={(e) => setSearchTermNationality(e.target.value)}
                    className={`w-full ${language === "fa" ? "rtl" : "ltr"}`}
                  />
                </div>
                {/* Display Filtered Nationalities */}
                {filteredNationalities.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>


          <div className="w-full grid grid-cols-1 items-center gap-4">
            <Input
              id="title"
              name="title"
              placeholder="عنوان فیلم ..."
            // className="col-span-4"
            />

            <Textarea
              id="opinion"
              name="opinion"
              placeholder="نظرت رو بنویس"
            // className="col-span-4"
            />
          </div>
        </form>

        <DialogFooter>
          <DialogTrigger asChild >
            <Button type="submit" size="sm"
              form="drama-form"
              className="w-full"
            >
              ذخیره
            </Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>

    </Dialog >
  );
}
