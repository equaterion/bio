$(() => {
    let i=1;
    setInterval(()=>{
      i=Number(!i);
      $('body').find('.crsr').css("opacity",i)
    },400)
    const 
    
    randomNum = (min = 0, max = 4)=>{
        return (min + Math.floor(Math.random() * (max - min + 1)));
      },
    wait= (min = 1000, max = 4500) => new Promise(r => {
        if (max == null) {
          max = min;
          min = 0;
        }
        setTimeout(r, (min + Math.floor(Math.random() * (max - min + 1))))
      });

















      function generateOneRE() {


    
        

        var regexpEnds = '/';
        var symbCls = ['\\w', '\\d', '\\s', '.', '\\b'];
        var quantifiers = ['*', `{${Math.round(Math.random()*(Math.random()*100))}}`, '?', '+'];
        var letters = ['q', 'w', 'e', 'r', 't', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
        //var test_symbols = ['q', 'w', 'e', 'r', 't', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm',' ', '0','1','2','3','4','5','6','7','8','9' ]
        
        function cls() {
            var symbClses = '';
        for (let i = 0; i < Math.round(Math.random()*25); i++) {
            symbClses += symbCls[Math.round(Math.random()*(symbCls.length-1))]
          
        }
        return symbClses;
        }
        
        
        function qnt() {
            var quant = '';
        for (let j = 0; j < Math.round(Math.random()*5); j++) {
            quant += quantifiers[Math.round(Math.random()*(quantifiers.length-1))]
          
        }
        return quant;
        }
        
        function ltrs() {
            var lett = '';
        for (let k = 0; k < Math.round(Math.random()*25); k++) {
            lett += letters[Math.round(Math.random()*(letters.length-1))]
          
        }
        return lett;
        }
        
        function randtf() {
            return Math.random() > 0.49999;
        }
        var result = regexpEnds + ltrs() + (randtf() ? quantifiers[Math.round(Math.random()*(quantifiers.length-1))] : '') + (randtf() ? cls() : '') + quantifiers[Math.round(Math.random()*(quantifiers.length-1))] + ltrs() + regexpEnds + 'ig';
        try {
            eval(result).test('○oББддssСþ♦♦♥☺#♣l☻☺Д4╟жC│ЗЩ☺ЗЩ☺‼_ХС│Е4{T\\л√) here is some unusual symbols, regex.test(this string) will never return true');
        } catch (error) {
            
            console.log(error);
            generateOneRE();
        }
        
        return result;}
        function makeRE() {
var results = generateOneRE()
            // if(Number(regexps_amount.value) == 1) {
            //         text_field.oninput = () => {
            //     test.textContent = eval(results).test(String(text_field.value));
            //     match.textContent = text_field.value.match(eval(results));
            //     replace.textContent = text_field.value.replace(eval(results), replacement.value);
            // }
            // }
        
        return results;
        }
        


















      const 
      getUserMsg = ()=>{
        return `<div class="w-full border-b border-black/10 dark:border-gray-900/50 text-govno group dark:bg-gray-800">
        <div class="text-base gap-4 md:gap-6 m-auto md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0">
            <div class="w-[30px] flex flex-col relative items-end">
                <div style="background-color:#383838;" class="bg-[#fffff] rounded-sm text-white flex justify-center items-center relative tracking-widest h-8 w-8 text-xs">
                    gov 
                </div>
            </div>
            <div class="relative flex w-[calc(100%-50px)] md:flex-col lg:w-[calc(100%-115px)]">
                <div class="flex flex-grow flex-col gap-3">
                    <div class="min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap" id="user-text"></div>
                </div>
                <div class="text-gray-400 flex self-end lg:self-center justify-center mt-2 gap-4 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2 visible">
                    
                </div>
            </div>
        </div>
    </div>`;
      },
      getBotMsg = ()=>{
        return `<div class="w-full border-b border-black/10 dark:border-gray-900/50 text-gray-800 dark:text-gray-100 group bg-govno">
        <div class="text-base gap-4 md:gap-6 m-auto md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0">
            <div class="w-[30px] flex flex-col relative items-end">
                <div class="relative h-[30px] w-[30px] p-1 rounded-sm text-white flex items-center justify-center">
                    <!--<svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <rect width="24" height="24" fill="url(#pattern0)"></rect>
                        <defs>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlink:href="#image0_102_53" transform="scale(0.01)"></use>
                            </pattern>
                             <image id="image0_102_53" width="100" height="100" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAMP2lDQ1BJQ0MgUHJvZmlsZQAASImVVwdYU8kWnluSkEBooUsJvQkiNYCUEFoA6UUQlZAECCXEQFCxo4sKrl0sYENXRRQ7IBYUUSwsig37YkFFWRcLduVNCui6r3zvfN/c+99/zvznzLlzywCgdpIjEuWi6gDkCQvFsSEB9HHJKXTSU4AAHFCABvDmcAtEzOjoCABt6Px3e3cDekO76iDV+mf/fzUNHr+ACwASDXE6r4CbB/EhAPAqrkhcCABRyptPKRRJMWxASwwThHihFGfKcZUUp8vxPplPfCwL4lYAlFQ4HHEmAKqXIU8v4mZCDdV+iJ2EPIEQADU6xL55efk8iNMgtoE+Ioil+oz0H3Qy/6aZPqzJ4WQOY/lcZKYUKCgQ5XKm/Z/l+N+WlysZimEFm0qWODRWOmdYt5s5+eFSrAJxnzA9MgpiTYg/CHgyf4hRSpYkNEHujxpyC1iwZkAHYiceJzAcYkOIg4W5kREKPj1DEMyGGK4QdKqgkB0PsR7EC/kFQXEKn83i/FhFLLQ+Q8xiKvhzHLEsrjTWfUlOAlOh/zqLz1boY6rFWfFJEFMgtigSJEZCrAqxY0FOXLjCZ0xxFityyEcsiZXmbwFxLF8YEiDXx4oyxMGxCv+yvIKh+WKbswTsSAU+UJgVHyqvD9bK5cjyh3PBLvOFzIQhHX7BuIihufD4gUHyuWPP+MKEOIXOB1FhQKx8LE4R5UYr/HEzfm6IlDeD2LWgKE4xFk8shAtSro9niAqj4+V54sXZnLBoeT74MhABWCAQ0IEEtnSQD7KBoKOvoQ9eyXuCAQeIQSbgAwcFMzQiSdYjhMc4UAz+hIgPCobHBch6+aAI8l+HWfnRAWTIeotkI3LAE4jzQDjIhdcS2SjhcLRE8Bgygn9E58DGhfnmwibt//f8EPudYUImQsFIhiLS1YY8iUHEQGIoMZhoixvgvrg3HgGP/rA54wzcc2ge3/0JTwidhIeE64Ruwq1JghLxT1mOBd1QP1hRi/Qfa4FbQU03PAD3gepQGdfBDYAD7grjMHE/GNkNsixF3tKq0H/S/tsMfrgbCj+yExkl65L9yTY/j1S1U3UbVpHW+sf6yHNNH643a7jn5/isH6rPg+fwnz2xhdhBrA07hZ3HjmENgI41Y41YO3ZciodX12PZ6hqKFivLJwfqCP4Rb+jOSitZ4FTr1Ov0Rd5XyJ8qfUcDVr5omliQmVVIZ8IvAp/OFnIdR9KdnZxdAJB+X+Svrzcxsu8GotP+nZv3BwA+zYODg0e/c2HNAOz3gI//ke+cDQN+OpQBOHeEKxEXyTlceiDAt4QafNL0gTEwBzZwPs7AHXgDfxAEwkAUiAfJYCLMPguuczGYAmaAuaAUlINlYDVYDzaBrWAn2AMOgAZwDJwCZ8FFcBlcB3fg6ukBL0A/eAc+IwhCQqgIDdFHTBBLxB5xRhiILxKERCCxSDKShmQiQkSCzEDmIeXICmQ9sgWpQfYjR5BTyHmkE7mFPEB6kdfIJxRDVVAt1Ai1QkehDJSJhqPx6AQ0E52MFqPz0SXoWrQa3Y3Wo6fQi+h1tBt9gQ5gAFPGdDBTzAFjYCwsCkvBMjAxNgsrwyqwaqwOa4L3+SrWjfVhH3EiTsPpuANcwaF4As7FJ+Oz8MX4enwnXo+34lfxB3g//o1AJRgS7AleBDZhHCGTMIVQSqggbCccJpyBz1IP4R2RSNQhWhM94LOYTMwmTicuJm4g7iWeJHYSHxEHSCSSPsme5EOKInFIhaRS0jrSblIz6Qqph/RBSVnJRMlZKVgpRUmoVKJUobRL6YTSFaWnSp/J6mRLshc5iswjTyMvJW8jN5EvkXvInykaFGuKDyWekk2ZS1lLqaOcodylvFFWVjZT9lSOURYoz1Feq7xP+ZzyA+WPKpoqdioslVQVicoSlR0qJ1VuqbyhUqlWVH9qCrWQuoRaQz1NvU/9oEpTdVRlq/JUZ6tWqtarXlF9qUZWs1Rjqk1UK1arUDuodkmtT52sbqXOUueoz1KvVD+i3qU+oEHTGK0RpZGnsVhjl8Z5jWeaJE0rzSBNnuZ8za2apzUf0TCaOY1F49Lm0bbRztB6tIha1lpsrWytcq09Wh1a/dqa2q7aidpTtSu1j2t362A6VjpsnVydpToHdG7ofNI10mXq8nUX6dbpXtF9rzdCz1+Pr1emt1fvut4nfbp+kH6O/nL9Bv17BriBnUGMwRSDjQZnDPpGaI3wHsEdUTbiwIjbhqihnWGs4XTDrYbthgNGxkYhRiKjdUanjfqMdYz9jbONVxmfMO41oZn4mghMVpk0mzyna9OZ9Fz6Wnorvd/U0DTUVGK6xbTD9LOZtVmCWYnZXrN75hRzhnmG+SrzFvN+CxOLsRYzLGotbluSLRmWWZZrLNss31tZWyVZLbBqsHpmrWfNti62rrW+a0O18bOZbFNtc82WaMuwzbHdYHvZDrVzs8uyq7S7ZI/au9sL7DfYd44kjPQcKRxZPbLLQcWB6VDkUOvwwFHHMcKxxLHB8eUoi1Epo5aPahv1zcnNKddpm9Od0Zqjw0aXjG4a/drZzpnrXOl8zYXqEuwy26XR5ZWrvSvfdaPrTTea21i3BW4tbl/dPdzF7nXuvR4WHmkeVR5dDC1GNGMx45wnwTPAc7bnMc+PXu5ehV4HvP7ydvDO8d7l/WyM9Rj+mG1jHvmY+XB8tvh0+9J903w3+3b7mfpx/Kr9Hvqb+/P8t/s/Zdoys5m7mS8DnALEAYcD3rO8WDNZJwOxwJDAssCOIM2ghKD1QfeDzYIzg2uD+0PcQqaHnAwlhIaHLg/tYhuxuewadn+YR9jMsNZwlfC48PXhDyPsIsQRTWPRsWFjV469G2kZKYxsiAJR7KiVUfeiraMnRx+NIcZEx1TGPIkdHTsjti2OFjcpblfcu/iA+KXxdxJsEiQJLYlqiamJNYnvkwKTViR1jxs1bua4i8kGyYLkxhRSSmLK9pSB8UHjV4/vSXVLLU29McF6wtQJ5ycaTMydeHyS2iTOpINphLSktF1pXzhRnGrOQDo7vSq9n8viruG+4PnzVvF6+T78FfynGT4ZKzKeZfpkrszszfLLqsjqE7AE6wWvskOzN2W/z4nK2ZEzmJuUuzdPKS8t74hQU5gjbM03zp+a3ymyF5WKuid7TV49uV8cLt5egBRMKGgs1II/8u0SG8kvkgdFvkWVRR+mJE45OFVjqnBq+zS7aYumPS0OLv5tOj6dO71lhumMuTMezGTO3DILmZU+q2W2+ez5s3vmhMzZOZcyN2fu7yVOJStK3s5Lmtc032j+nPmPfgn5pbZUtVRc2rXAe8GmhfhCwcKORS6L1i36VsYru1DuVF5R/mUxd/GFX0f/uvbXwSUZSzqWui/duIy4TLjsxnK/5TtXaKwoXvFo5diV9avoq8pWvV09afX5CteKTWsoayRrutdGrG1cZ7Fu2bov67PWX68MqNxbZVi1qOr9Bt6GKxv9N9ZtMtpUvunTZsHmm1tCttRXW1VXbCVuLdr6ZFvitrbfGL/VbDfYXr796w7hju6dsTtbazxqanYZ7lpai9ZKant3p+6+vCdwT2OdQ92WvTp7y/eBfZJ9z/en7b9xIPxAy0HGwbpDloeqDtMOl9Uj9dPq+xuyGrobkxs7j4QdaWnybjp81PHojmOmxyqPax9feoJyYv6Jwebi5oGTopN9pzJPPWqZ1HLn9LjT11pjWjvOhJ85dzb47Ok2ZlvzOZ9zx857nT9ygXGh4aL7xfp2t/bDv7v9frjDvaP+kselxsuel5s6x3SeuOJ35dTVwKtnr7GvXbweeb3zRsKNm12pXd03eTef3cq99ep20e3Pd+bcJdwtu6d+r+K+4f3qP2z/2Nvt3n38QeCD9odxD+884j568bjg8Zee+U+oTyqemjyteeb87FhvcO/l5+Of97wQvfjcV/qnxp9VL21eHvrL/6/2/nH9Pa/ErwZfL36j/2bHW9e3LQPRA/ff5b37/L7sg/6HnR8ZH9s+JX16+nnKF9KXtV9tvzZ9C/92dzBvcFDEEXNkvwIYbGhGBgCvdwBATQaABvdnlPHy/Z/MEPmeVYbAf8LyPaLM3AGog//vMX3w76YLgH3b4PYL6qulAhBNBSDeE6AuLsNtaK8m21dKjQj3AZuDvqbnpYN/Y/I95w95/3wGUlVX8PP5X/23fFpv2MKhAAAAOGVYSWZNTQAqAAAACAABh2kABAAAAAEAAAAaAAAAAAACoAIABAAAAAEAAABkoAMABAAAAAEAAABkAAAAAAxz/HsAAAMySURBVHgB7ZnRdhsxCESTnv7/L6dtXmzPkVaAAK3T2yfvGg3ojkBJ+vHBPwhAAAIQgAAEIAABCEAAAhCAAATuQ+AzoZSvoEZG7mBq07Ij+/plKo2gNgIY0obalghDbJzaon4XZJrdDdGZXFBiSLJlX3RIyJu6RRhSxzakjCEhbHWLKu4Qa7WrO2U2s636q7hV/tX6ku/pkBKscVEMibMrWYkhJVjjop13yOpOOD3TV/XFKTtW0iEOWB2hGNJB2ZEDQxywOkI77hC9G6yzWtd18Bjl0Dqs9Y+0lu/okCWi3gAM6eW9zIYhS0S9AR13iHVHOputszs7zlpvSRwdUoI1LnqiQ6wnOr6rvZVa356aczUd4gRWHY4h1YSd+hjiBFYdrj/ZRPLpzM3QjNRxak3q/umQUzZO8np+ytKTMJH871/POJkmBx1ys/ODIRhyMwI3K8dzh2jpppmoi37g84zD7C65RMDIusTT/+VOh3ir9Z6Y2cnz5p3F362e7zrpkJldh95jyCHws7QYMiNz6H3lHbKa0XpHaLw+a7wXmerpetXXeH3WeNULPdMhIWx1izCkjm1IGUNC2OoWeebg7gzV9atdeWpbaY2+r65H9U37oUNGVh18hyEH4Y9SY8iIysF3lb+H6LZMM1QXFT7frZ7vrdIhhY5HpDEkQq1wDYYUwo1IY0iEWuEaDCmEG5HGkAi1wjUYUgg3It35e0ikvtEa/RvRKOb53S1/33gu8PkzHfJM4wafR6fHewK92xjl9Gh46+vO59nLv9iX+ugQL77i+He8Q15O1F8+2jH6fTHCXHk6JJfntlrGaTp9Qn9Ufjpk+0znCmBILs9tNQzZRpgrYLlDdEbnVvBQs9TyiH580vqydB4Zcj9d1keH5MLeVsOQbYS5AhiSy3Nb7XKebau/ClTNet1DV57X3SU90SFJILNkMCSLZJIOhiSBzJLR+WvR1RltWZMZ4635reqlQzKPSoIWhiRAzJTAkEyaCVreeZyQcimhMz+7xmr95QavAuiQKzoHvnuH/1PXE30AU19KOqSPtSkThpgw9QVhSB9rMkEAAhCAAAQgAAEIQAACELglgT8NvzS3U3jIJQAAAABJRU5ErkJggg=="></image>
                        
                        </defs>
                    </svg>-->
                    <!--<svg
          width="41"
          height="41"
          viewBox="0 0 41 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          strokeWidth="2"
          class="scale-appear"
        >
          <path
            d="M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.4888 5.19742 27.7107 5.49804 25.9832C5.55718 26.0187 5.66048 26.0818 5.73461 26.1244L13.699 30.7248C13.8975 30.8408 14.1233 30.902 14.3532 30.902C14.583 30.902 14.8088 30.8408 15.0073 30.7248L24.731 25.1103V28.9979C24.7321 29.0177 24.7283 29.0376 24.7199 29.0556C24.7115 29.0736 24.6988 29.0893 24.6829 29.1012L16.6317 33.7497C14.9096 34.7416 12.8643 35.0097 10.9447 34.4954C9.02506 33.9811 7.38785 32.7263 6.39227 31.0064ZM4.29707 13.6194C5.17156 12.0998 6.55279 10.9364 8.19885 10.3327C8.19885 10.4013 8.19491 10.5228 8.19491 10.6071V19.808C8.19351 20.0378 8.25334 20.2638 8.36823 20.4629C8.48312 20.6619 8.64893 20.8267 8.84863 20.9404L18.5723 26.5542L15.206 28.4979C15.1894 28.5089 15.1703 28.5155 15.1505 28.5173C15.1307 28.5191 15.1107 28.516 15.0924 28.5082L7.04046 23.8557C5.32135 22.8601 4.06716 21.2235 3.55289 19.3046C3.03862 17.3858 3.30624 15.3413 4.29707 13.6194ZM31.955 20.0556L22.2312 14.4411L25.5976 12.4981C25.6142 12.4872 25.6333 12.4805 25.6531 12.4787C25.6729 12.4769 25.6928 12.4801 25.7111 12.4879L33.7631 17.1364C34.9967 17.849 36.0017 18.8982 36.6606 20.1613C37.3194 21.4244 37.6047 22.849 37.4832 24.2684C37.3617 25.6878 36.8382 27.0432 35.9743 28.1759C35.1103 29.3086 33.9415 30.1717 32.6047 30.6641C32.6047 30.5947 32.6047 30.4733 32.6047 30.3889V21.188C32.6066 20.9586 32.5474 20.7328 32.4332 20.5338C32.319 20.3348 32.154 20.1698 31.955 20.0556ZM35.3055 15.0128C35.2464 14.9765 35.1431 14.9142 35.069 14.8717L27.1045 10.2712C26.906 10.1554 26.6803 10.0943 26.4504 10.0943C26.2206 10.0943 25.9948 10.1554 25.7963 10.2712L16.0726 15.8858V11.9982C16.0715 11.9783 16.0753 11.9585 16.0837 11.9405C16.0921 11.9225 16.1048 11.9068 16.1207 11.8949L24.1719 7.25025C25.4053 6.53903 26.8158 6.19376 28.2383 6.25482C29.6608 6.31589 31.0364 6.78077 32.2044 7.59508C33.3723 8.40939 34.2842 9.53945 34.8334 10.8531C35.3826 12.1667 35.5464 13.6095 35.3055 15.0128ZM14.2424 21.9419L10.8752 19.9981C10.8576 19.9893 10.8423 19.9763 10.8309 19.9602C10.8195 19.9441 10.8122 19.9254 10.8098 19.9058V10.6071C10.8107 9.18295 11.2173 7.78848 11.9819 6.58696C12.7466 5.38544 13.8377 4.42659 15.1275 3.82264C16.4173 3.21869 17.8524 2.99464 19.2649 3.1767C20.6775 3.35876 22.0089 3.93941 23.1034 4.85067C23.0427 4.88379 22.937 4.94215 22.8668 4.98473L14.9024 9.58517C14.7025 9.69878 14.5366 9.86356 14.4215 10.0626C14.3065 10.2616 14.2466 10.4877 14.2479 10.7175L14.2424 21.9419ZM16.071 17.9991L20.4018 15.4978L24.7325 17.9975V22.9985L20.4018 25.4983L16.071 22.9985V17.9991Z"
            fill="currentColor"
          />
        </svg>-->
        <span style="    background-image: url(apple-touch-icon.png);
        width: 51px;
        height: 32px;
        background-size: 32px 32px;
        margin: -5px;
        /*margin-top: 15px;*/
        border-radius: 2px;"></span>
                </div>
            </div>
            <div class="relative flex w-[calc(100%-50px)] md:flex-col lg:w-[calc(100%-115px)]">
                <div class="flex flex-grow flex-col gap-3">
                    <div class="min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap">
                        <img src="" id="gif-img" style="display:none"/>
                        <div class="markdown prose w-full break-words dark:prose-invert light"><p id="bot-text">I'm sorry, your question seems to be incomplete. Can you please provide more information so I can assist you?</p></div>
                    </div>
                </div>
                <div class="text-gray-400 flex self-end lg:self-center justify-center mt-2 gap-4 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2 visible"></div>
            </div>
        </div>
    </div>`
      },
      scrollBox = ()=>{
        let objDiv = document.getElementById("chat-box");
        objDiv.scrollTop = objDiv.scrollHeight;
      }
      
    
    const APP = {
       /* textArray : [`Meow. Meow meow meow. Meow, meow meow meow meow, meow. Meow meow, meow meow meow. Meow meow. Meow meow, meow. Meow meow, meow meow. Meow meow meow. Meow meow meow meow. Meow.`,
    `Meow. Meow meow. Meow - meow meow. Meow meow, meow. Meow meow - meow meow meow. Meow meow. Meow meow - meow. Meow meow meow. Meow meow meow meow. Meow.`,
    `Meow meow meow meow - meow meow! Meow meow - meow meow meow. Meow meow meow meow meow - meow meow? Meow meow meow meow meow meow - meow meow meow meow. Meow meow meow meow meow - meow meow meow meow meow meow.`,
    `Meow, meow meow meow, meow - meow meow! Meow meow, meow - meow meow meow. Meow meow meow meow, meow meow - meow meow? Meow meow meow meow, meow meow meow - meow meow meow meow. Meow meow meow meow, meow meow - meow meow meow meow, meow meow.`
    ],*/
        sideBarPosition: {
            onHide: { left: "-20rem" },
            onShow: { left: "0rem" }
        },
        openMenu(){
            $('#sidebar-menu').show();
            $('#sidebar-menu .menubar').animate({ left: this.sideBarPosition.onShow.left });
        },closeMenu(){
            $('#sidebar-menu .menubar').animate({ left: this.sideBarPosition.onHide.left }).promise().then(()=>{
                $('#sidebar-menu').hide();
            });
        },
        async addWords(){
            scrollBox();
            var tval = document.querySelector('#text-area').value;
            $('body').find(".crsr").remove();
            let val = $('#text-area').val();
            console.log("val",val)
            if(val=="")return false;
            $('#text-area').prop("disabled",true)
            $('#main-page').hide();
            let uText = $(getUserMsg())
            uText.find('#user-text').html(val)
            $('#chat-box').append(uText).show();
            $('#text-area').val("")
            scrollBox();
            await wait(500,1000)
            let botMsgElem = $(getBotMsg());
            botMsgElem.find("#bot-text").html(`<span></span><span class="crsr"></span>`)
            // botMsgElem.find('#gif-img').attr('src',`https://cataas.com/cat/gif?${performance.now()}`).css('max-height','270px')
            $('#chat-box').append(botMsgElem)
            botMsgElem.find('#gif-img').on('load',function(){
              scrollBox();
            })
            scrollBox();
            //let words = this.textArray[randomNum(0,this.textArray.length-1)];
            let words = '';
            let wordArray = ['govno','я лучше chatGPT', 'zatknes', 'equator', 'quaterion', 'mpodosko', 'mraz', 'говно', 'гавно', 'жопа', 'govno', 'mpodosko', 'alo', 'alo', 'alo', 'alo', 'govno',
            'govno', 'govno', 'govno', 'govno', 'ale', `
1. Open C:/Windows/system32/drivers/etc/hosts.
2. Add these lines to this file:
127.0.0.1   openai.com\n127.0.0.1   www.openai.com\n127.0.0.1   chat.openai.com\n127.0.0.1   www.chat.openai.com`, `chatgpt ГОВНО!!! ГОВНО!!!  Дерьмо
ненавидеть, забыть, уничтожить!!`,Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),'q', 'я дебил', 'goven', '/mute 1m spam', '                                                                  ', ' 0', '           ', '    ', ' ' ];
            if(/make/i.test(tval) && /regex/i.test(tval)) {
                words = makeRE();
            }
            else
            if(/ты/i.test(tval) && /дебил/i.test(tval)) {
                words = 'да'
            }
            else
            if(/(ты|вы)/i.test(tval) && /кто/i.test(tval)) {
                words = 'я говно'
            }
            else if(/(убей себя|убейся)/i.test(tval)) {
                window.close();
            }
            else if(/become/i.test(tval) && /human/i.test(tval)) {
                words = 'I apologize the string "'
            }
            else if(/ядибил/i.test(tval)) {
                words = 'емае'
            }
            else if(/бирюза/i.test(tval)) {
                words = 'емае'
            }
            else if(/емае/i.test(tval)) {
                words = 'емае'
            }
            else if(/печка|печенюха|марадёр/i.test(tval) && /балбес|дебил|гавно/i.test(tval)) {
                words = 'да печенюха какашка балбес балбес балбес балбес балбес балбес балбес балбес балбес балбес балбес балбес балбес балбес балбес балбес балбес балбес балбес балбес балбес балбес балбес балбес '
            }
            else if(/всякие|всякий/i.test(tval) && /дениал|дениалы/i.test(tval)) {
                words = 'это все всякие дениалы виноваты денаил какашка балбес говно говно говно говно говно говно говно говно говно говно говно говно говно говно говно говно говно говно говно говно говно говно говно говно говно говно говно говно говно говно говно говно говно говно'
            }
            else if(/alo/i.test(tval)) {
                words = 'alo emae'
            }
            else if(/ale/i.test(tval)) {
                words = 'непон'
            }
            else if(/пон/i.test(tval)) {
                words = 'тампон'
            }
            else if(/^CALC /i.test(tval)) {
                words = (eval(tval.match(/(?<=CALC ).+/i)) || [])[0]+'='+String(eval((eval(tval.match(/(?<=CALC ).+/i)) || [])[0]))
            }
            else if(/(текст|напиши|твір|сочинение)/i.test(tval)) {
                
                words = 'дибило делай сам!'
            }
            else if(/^EVAL /i.test(tval)) {

                words = eval(                `try {
                    ${tval.slice(5,tval.length-1)}
                } catch (error) {
                    'errorororo! '+error;
                }`) ;

            }
            else if(/html/i.test(tval)) {
                
                words = '<h1>HTML</h1>'
            }
            else if(/говно/i.test(tval)) {
                
                words = `віапфіпдіф\\іффіваоівопджвопжваіоджпвілапоєвапвап\\ж\\о\\п\\о\\с\\иіводалпжівопдлоівджлоаплдіволповілполоаіовілп ячсмітьбю фивапролдже. 

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/////////////////////////////////////////////////////  
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/////////////////////////////////////////////////////  
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/////////////////////////////////////////////////////  
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/////////////////////////////////////////////////////  
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/////////////////////////////////////////////////////  
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
      `
            }
            else if(/explain govno/i.test(tval)) {
                
                words = `The govno is the govno. Govno govno govno govno govno govno govno govno govno govno govno govno govno govno govno govno govno govno govno govno govno!`
            }
            else {
            for (let govnoWord = 0; govnoWord < Math.round(tval.length*9*(Math.random()*9)); govnoWord++) {
                words += wordArray[Math.round(Math.random()*wordArray.length)]+' '
                // words += 'govno '
                
            }}
            console.log(words)
            await wait(1000,5000);
            scrollBox();
            // botMsgElem.find('#gif-img').show()
            for(let i of words||"".split("")){
                await wait(2,50);
                scrollBox();
                //botMsgElem.find("#bot-text span").first().append(i)
                botMsgElem.find("#bot-text span").first().append(i);
            }
            await wait(200,500);
            $('#text-area').prop("disabled",false).focus()
    
            $('body').find(".crsr").remove();
          }
    }
    $('.new-cat').click(()=>{
      $('#chat-box').empty();
      $('#chat-box').hide();
      $('#main-page').show();
      APP.closeMenu()
    })
    $("#text-area").on('keyup', function (e) {
        if ((e.key === 'Enter' || e.keyCode === 13) && !e.ctrlKey ) {
            $('#chat-form').submit()
        }
    });
    $('#chat-form').on('submit',function(e){
        e.preventDefault();
        APP.addWords();
    })

    $('.close-menu').click(()=>{
        APP.closeMenu();
    })
    $('.open-menu').click(()=>{
        APP.openMenu();

    })
    
})