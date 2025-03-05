const Tag = ({ title }: { title: string }) => {
  return (
    <div className=" flex gap-2 py-2.5 items-center">
      <img
        src={
          0 === "dark"
            ? "https://res.cloudinary.com/deqnekemi/image/upload/f_webp/v1741153551/Tag_vgm1mz.png"
            : "https://res.cloudinary.com/deqnekemi/image/upload/f_webp/v1741154234/Tag_1_e6jtm2.png"
        }
        alt="Tag icon"
        className="w-4 h-4"
      />
      <h1 className="font-medium text-[15px] capitalize">{title}</h1>
    </div>
  );
};

export default Tag;
