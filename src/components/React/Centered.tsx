type CenteredProps = {
  title?: string;
  description?: string;
};

export default function Centered({ title, description }: CenteredProps) {
  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          {title || "Support center"}
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          {description ||
            "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."}
        </p>
      </div>
    </div>
  );
}
