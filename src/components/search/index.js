const SearchSection = () => {
  return (
    <div className='flex items-center gap-6'>
      <div>
        <input
          type='text'
          className='border border-black w-[150px] h-[30px] sm:w-full'
        />
      </div>
      <div>
        <button className='bg-black text-white p-1  rounded-md'>Clear</button>
      </div>
    </div>
  );
};

export default SearchSection;
