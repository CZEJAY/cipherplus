import React from "react";

const Users = () => {
  return (
    <div className="bg-gray-950 dark:bg-neutral-950 w-full h-full min-h-[250px] p-2">
      <h1 className="text-white text-2xl brightness-200 font-bold text-center mb-2 leading-tight">
        Welcome to Cipherplus: Verified Code Security
      </h1>

      <div className="mt-2">
        <div className="bg-gray-950 p-2">
          <h4 className="gradient bg-clip-text text-transparent font-bold leading-tight">
            Understanding Code Security: A Foundation for Success
          </h4>
          <p className="ml-2 mt-2 text-gray-50 leading-tight p-1">
            Delve into the fundamentals of code security and discover why it's a
            non-negotiable aspect of modern programming. Uncover common
            vulnerabilities and learn about the evolving cybersecurity landscape
            that directly impacts your code.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1">
        <div className="bg-gray-950 p-2 col-span-2">
          <h4 className="gradient bg-clip-text text-transparent font-bold leading-tight">
            Best Practices Tailored for Cipherplus Assurance
          </h4>
          <p className="ml-2 mt-2 text-gray-50 leading-tight p-1">
            Unlock a treasure trove of best practices designed to fortify your
            code against potential threats. From meticulous input validation to
            secure data storage, Cipherplus provides actionable tips to
            implement secure coding habits that stand the test of time.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Users;
