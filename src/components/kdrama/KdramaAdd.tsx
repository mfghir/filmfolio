"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { labels, genres, statuses, nationalities } from "@/lib/data";

import { useState } from "react";
import { useAddDrama } from "@/lib/mutations";
import { useToast } from "../ui/use-toast";
import { useGoogleTranslate } from "@/utilities/google-translate";


type SelectOptions = {
  statuses: string;
  labels: string;
  genres: string;
  nationality: string
};


const KdramaAdd = () => {
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

  const { mutate } = useAddDrama()
  const { toast } = useToast()
  const [value, setValue] = useState<SelectOptions>({
    statuses: "",
    labels: "",
    genres: "",
    nationality: ""
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    console.log("data - KdramaAdd ---->", data);

    try {
      // await axios.post(`/api/kdrama`, data);
      mutate(data);

      toast({ variant: "success", title: "با موفقیت اضافه شد ✔" });

    } catch (error) {
      console.error("Error adding data:", error);
      toast({
        title: "خطا در اضافه کردن داده",
        description: "هنگام اضافه کردن داده یک خطا رخ داد"
      });
    }





    //  // Check if session, user, and email are available before using
    //  const author = session?.user?.email ?? ''; // Default value if email is undefined
    //  // Add author to the data object
    //  data.author = author;

    // try {
    //   // Send the post request directly with the data object
    //   // await axios.post(`/api/kdrama`, data);
    //   mutate(data);

    //   toast({ title: "Successfully Added ✔" });

    // } catch (error) {
    //   console.error("Error adding data:", error);
    //   toast({ title: "Error Adding Data", description: "An error occurred while adding data" });
    // }
  };


  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   const formData = new FormData(form);
  //   const data = Object.fromEntries(formData);

  //   await fetch("/api/kdrama", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(data),
  //   })
  //     .then((res) => {
  //       if (!res.ok) throw new Error("Could not add kdrama.")
  //       toast({ title: "Successfully Added ✔" })
  //       return res.json()
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       // router.push("/login");
  //     }).catch((err) => console.log(err.message));
  // }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" size="sm" className="ml-4 md:ml-0" >
          ＋ افزودن
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-[280px] md:max-w-[430px]">
        <DialogHeader>
          <DialogTitle className={`mt-4 ${language === "fa" ? "text-right" : "text-left"} `}>
            اضافه کردن عنوان جدید
          </DialogTitle>
          <DialogDescription className={` ${language === "fa" ? "text-right float-right content-start" : "text-left"} `}>
            چه چیزی می‌خوای اضافه کنی؟ 😃
          </DialogDescription>
        </DialogHeader>

        <form
          id="drama-form"
          className={`grid gap-4 py-4 ${language === "fa" ? "rtl" : "ltr"} `}
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="title"
              name="title"
              placeholder="عنوان فیلم ..."
              className="col-span-4"
            />
          </div>

          <div className={`grid grid-cols-4 items-center gap-4 ${language === "fa" ? "rtl" : "ltr"} `}>
            <Select
              name="status"
              value={value.statuses}
              onValueChange={(val) => setValue({ ...value, statuses: val })}
            >
              <SelectTrigger className={`w-[180px] ${language === "fa" ? "rtl" : "ltr"} `}>
                <SelectValue placeholder="انخاب وضعیت" />
              </SelectTrigger>
              <SelectContent
              >
                {statuses.map((item) =>
                  <SelectItem key={item.label} value={item.value}>
                    {item.label}
                  </SelectItem>
                )}
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
              <SelectTrigger className={`w-[180px] ${language === "fa" ? "rtl" : "ltr"} `}>
                <SelectValue placeholder="انتخاب برچسب" />
              </SelectTrigger>
              <SelectContent>
                {labels.map((item) =>
                  <SelectItem key={item.label} value={item.value}>
                    {item.label}
                  </SelectItem>
                )}
              </SelectContent>
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
              <SelectTrigger className={`w-[180px] ${language === "fa" ? "rtl" : "ltr"} `}>
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
          </div>


          <div className="grid grid-cols-4 items-center gap-4">
            <Select
              name="nationality"
              value={value.nationality}
              onValueChange={(val) => setValue({ ...value, nationality: val })}
            >
              <SelectTrigger className={`w-[180px] ${language === "fa" ? "rtl" : "ltr"}`}>
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
        </form>

        <DialogFooter>
          <DialogTrigger asChild>
            <Button type="submit" size="sm" form="drama-form">
              ذخیره
            </Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}


export default KdramaAdd 