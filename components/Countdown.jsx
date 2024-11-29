const CountdownSection = () => {
    return (
      <div className="bg-purple-700 flex justify-between items-center py-4 px-6 md:px-12">
        
        <div className="text-white text-sm md:text-base">
          A day in the life. Please join us as we walk through a day of an Ed
          student. <span className="font-bold underline">Request a tour</span>
        </div>
  
       
        <div className="flex items-center gap-4">
          <span className="text-white text-sm md:text-base">
            Admissions to Competition Starts in
          </span>
          <div className="flex gap-2 bg-gradient-to-r from-[#2E98FC] to-[#E01CF4] p-1 rounded-md">
            
            <div className="bg-transparent text-white px-4 py-2 rounded-md border border-white">
              <span className="text-lg font-bold">00</span>
            </div>
            <div className="bg-transparent text-white px-4 py-2 rounded-md border border-white">
              <span className="text-lg font-bold">00</span>
            </div>
            <div className="bg-transparent text-white px-4 py-2 rounded-md border border-white">
              <span className="text-lg font-bold">00</span>
            </div>
            <div className="bg-transparent text-white px-4 py-2 rounded-md border border-white">
              <span className="text-lg font-bold">00</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CountdownSection;
  