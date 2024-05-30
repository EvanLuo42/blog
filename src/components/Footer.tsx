import {Separator} from "@/components/ui/separator.tsx";

export function Footer() {
  return (
    <>
      <Separator></Separator>
      <div className="bottom-0 flex justify-center items-center p-4">
        <p>©Copyright EvanLuo42. All rights reserved. Here is the <a className="underline" href="https://github.com/EvanLuo42/blog">source code</a>.</p>
      </div>
    </>
  )
}