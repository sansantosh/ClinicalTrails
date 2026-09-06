import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Clinical Trails Updates" },
    { name: "description", content: "Latest Clinical Updates" },
  ];
}

export default function Home() {
  return <h1> Clinical Trials</h1>;
}
