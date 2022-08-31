process.stdout.write('hello from spinner2.js... \rheyyy\n');

const spinner1 = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r\/   ', '\r\-   ', '\r\\   ', '\r\|   '];


const spinner2 = () => {
  let timer = 0;
  for (let i = 0; i <= spinner1.length; i++) {
    setTimeout(() => {
      process.stdout.write(spinner1[i % 4]);
    }, timer);
    timer += 200;
  }
};

spinner2(spinner1);

