interface Domains {
  [key: string]: { policy: string };
}

// Time O(N), Space O(N)
// The time complexity for this function is O(n) as we need to loop through N Object keys at least.
// for loop + Object.keys + Object.entries O(3*N) => O(N)
// Also requires O(N) space as it uses another array for policies per se.
const getBlockPolicyStateInit = (domains: Domains) => {
  const numDomains = Object.keys(domains).length;
  const policyArr: string[] = [];
  for (let i = 0; i < numDomains; i++) {
    policyArr.push(Object.entries(domains)[i][1].policy);
  }
  const oneDomain = policyArr.some((item) => item === "block");
  const allDomains = policyArr.every((item) => item === "block");
  return { oneDomain, allDomains };
};

// Time O(N), Space O(1)
// The time complexity is O(N) to loop through all keys of the object.
// This immplementation does not use any extra space so it is O(1)
const getBlockPolicyState = (domains: Domains) => {
  let isBlockPolicy = false;
  let isNonePolicy = false;
  for (const key in domains) {
    if (Object.prototype.hasOwnProperty.call(domains, key)) {
      const element = domains[key];
      if (element.policy === "block" && isBlockPolicy !== true) {
        isBlockPolicy = true;
      } else if (element.policy === "none") {
        isNonePolicy = true;
      }
    }
  }
  return { oneDomain: isBlockPolicy, allDomains: isNonePolicy ? false : true };
};

export { getBlockPolicyStateInit, getBlockPolicyState };
