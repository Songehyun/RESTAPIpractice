const xhr = new XMLHttpRequest();

let requestmethod = "GET";

const requesturl = `https://apis.data.go.kr/6300000/openapi2022/restrnt/getrestrnt?serviceKey=HV8E%2BTY8D2sM0K0m4ySRar%2F5gcEogz%2FBFEg%2BWr5P0t7m67j5Mg6xuAy1wGLmzhNFVsgSQ%2BwjmzOshIxLiknILw%3D%3D&pageNo=1&numOfRows=10`;

xhr.open(requestmethod, requesturl, true);
xhr.send();

xhr.addEventListener("load", () => {
  if (xhr.status === 200) {
    console.log("200은 성공 코드이다");

    const result = JSON.parse(xhr.responseText);

    let foodarray = result.response.body.items;

    foodarray[0].restrntNm;
  }
});
