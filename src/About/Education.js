const Education = () => {
  return (
    <div className="flex-1 py-20 max-w-7xl mx-auto px-4">
        <div>
            <p className="text-yellow-500 text-sm mb-2">— Education</p>
            <h2 className="text-3xl font-bold text-white mb-3">SSC & HSC <span className="text-yellow-400">Education</span></h2>

            <div className="mb-5">
                <p className="text-gray-300 mb-2 text-lg">2020</p>
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">Secondary School Certificate (SSC)</h3>
                <p className="text-gray-300">
                    Completed 10th Standard from Shri Amrutba Madhyamik Shala, Amreli.
                </p>
            </div>

            <div>
                <p className="text-gray-300 mb-2 text-lg">2022</p>
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">Higher Secondary Certificate (HSC)</h3>
                <p className="text-gray-300">
                    Completed 12th Standard from Oxford School of Science - Amreli. Built a strong foundation in Mathematics, Physics, and Computer Science, developing analytical and problem-solving skills essential for engineering studies.
                </p>
            </div>
        </div>
    </div>
  );
};

export default Education