import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services",
};

function PlusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function TrashIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}

function FilePenIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  );
}

const Services = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Services" />
      </div>
      <section className="py-12 md:py-20">
        <div className="container flex items-center justify-end px-4 md:px-6">
          <Button>Add New Service</Button>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="bg-card relative aspect-square space-y-4 rounded-lg p-6">
            <div className="absolute right-4 top-4 flex gap-2">
              <Button variant="ghost" size="sm">
                <TrashIcon className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <PlusIcon className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <FilePenIcon className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid gap-4">
              <h3 className="text-xl font-semibold">GSM Services</h3>
              <div className="grid gap-2">
                <div className="bg-muted flex items-center justify-between rounded-md p-3">
                  <span>GSM</span>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <FilePenIcon className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <TrashIcon className="h-4 w-4" />
                    </Button>
                    <span className="font-semibold">$9.99</span>
                  </div>
                </div>
                <div className="bg-muted flex items-center justify-between rounded-md p-3">
                  <span>GPRS</span>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <FilePenIcon className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <TrashIcon className="h-4 w-4" />
                    </Button>
                    <span className="font-semibold">$4.99</span>
                  </div>
                </div>
                <div className="bg-muted flex items-center justify-between rounded-md p-3">
                  <span>SMS</span>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <FilePenIcon className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <TrashIcon className="h-4 w-4" />
                    </Button>
                    <span className="font-semibold">$2.99</span>
                  </div>
                </div>
                <div className="bg-muted flex items-center justify-between rounded-md p-3">
                  <span>MMS</span>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <FilePenIcon className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <TrashIcon className="h-4 w-4" />
                    </Button>
                    <span className="font-semibold">$3.99</span>
                  </div>
                </div>
                <div className="bg-muted flex items-center justify-between rounded-md p-3">
                  <span>EDGE</span>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <FilePenIcon className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <TrashIcon className="h-4 w-4" />
                    </Button>
                    <span className="font-semibold">$6.99</span>
                  </div>
                </div>
                <div className="bg-muted flex items-center justify-between rounded-md p-3">
                  <span className="text-muted-foreground bg-muted/50 rounded-md px-2 py-1">
                    Show more
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Services;
