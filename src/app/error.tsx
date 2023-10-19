"use client";

export default function Error({ error }: { error: Error }) {
  return <p>Oops.. {error.message}</p>;
}
