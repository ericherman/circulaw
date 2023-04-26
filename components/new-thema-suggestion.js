import Link from 'next/link';
import CustomButton from './custom-button';
import { ArrowRightIcon } from '@heroicons/react/outline';

export default function NewThemaSuggestion() {
  return (
    <>
      <div className='h-32 w-[728px] hidden bg-green-500 rounded-cl sm:flex flex-row items-center justify-between shadow'>
        <div className='ml-8'>
          <svg
            width='98'
            height='98'
            viewBox='0 0 98 98'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='49' cy='49' r='48.5' fill='#035E46' stroke='#FDFDFD' />
            <path
              d='M48.1723 27.0327C47.973 27.0327 47.8164 26.8761 47.8164 26.6769V13.5033C47.8164 13.304 47.973 13.1475 48.1723 13.1475C48.3715 13.1475 48.5281 13.304 48.5281 13.5033V26.6769C48.5281 26.8761 48.3715 27.0327 48.1723 27.0327Z'
              fill='#F8FBF8'
            />
            <path
              d='M48.1723 10.9907L49.617 14.535L48.1723 13.6881L46.7275 14.535L48.1723 10.9907Z'
              fill='#F8FBF8'
            />
            <path
              d='M33.2554 32.7901C33.1558 32.7901 33.0561 32.7474 32.985 32.662L24.5158 22.5701C24.3877 22.4206 24.409 22.1929 24.5585 22.0719C24.7079 21.9438 24.9357 21.9652 25.0566 22.1146L33.5259 32.2065C33.654 32.356 33.6326 32.5837 33.4832 32.7047C33.4191 32.7616 33.3337 32.7901 33.2554 32.7901Z'
              fill='#F8FBF8'
            />
            <path
              d='M23.1709 20.4207L26.5515 22.1999L24.9074 22.4846L24.3381 24.0574L23.1709 20.4207Z'
              fill='#F8FBF8'
            />
            <path
              d='M25.5265 46.7893C25.5265 46.7893 25.4837 46.7893 25.4624 46.7893L12.4881 44.5047C12.296 44.4691 12.1679 44.2841 12.1963 44.0919C12.2319 43.8998 12.417 43.7645 12.6091 43.8001L25.5834 46.0847C25.7755 46.1203 25.9037 46.3053 25.8752 46.4975C25.8467 46.6683 25.6973 46.7893 25.5265 46.7893Z'
              fill='#F8FBF8'
            />
            <path
              d='M10.0752 43.7075L13.8187 42.9033L12.7369 44.1773L13.3134 45.7501L10.0752 43.7075Z'
              fill='#F8FBF8'
            />
            <path
              d='M17.1988 69.0654C17.0778 69.0654 16.9568 69.0013 16.8928 68.8875C16.7931 68.7167 16.8501 68.5032 17.0209 68.4035L28.4294 61.8132C28.6002 61.7136 28.8137 61.7705 28.9134 61.9413C29.013 62.1121 28.9561 62.3256 28.7853 62.4252L17.3767 69.0156C17.3198 69.0512 17.2629 69.0654 17.1988 69.0654Z'
              fill='#F8FBF8'
            />
            <path
              d='M15.0215 69.9691L17.363 66.9443L17.3559 68.6168L18.8077 69.4495L15.0215 69.9691Z'
              fill='#F8FBF8'
            />
            <path
              d='M36.5432 84.9005C36.5005 84.9005 36.4649 84.9005 36.4222 84.8792C36.2372 84.8151 36.1447 84.6087 36.2087 84.4237L40.7138 72.0401C40.7778 71.8551 40.9842 71.7626 41.1693 71.8266C41.3543 71.8907 41.4468 72.0971 41.3828 72.2821L36.8777 84.6657C36.8279 84.808 36.6856 84.9005 36.5432 84.9005Z'
              fill='#F8FBF8'
            />
            <path
              d='M35.6824 86.9078L35.54 83.0859L36.6076 84.367L38.2587 84.0752L35.6824 86.9078Z'
              fill='#F8FBF8'
            />
            <path
              d='M61.5453 84.5948C61.403 84.5948 61.2607 84.5023 61.2108 84.3599L56.7058 71.9764C56.6417 71.7913 56.7343 71.5849 56.9193 71.5209C57.1043 71.4497 57.3107 71.5494 57.3748 71.7344L61.8798 84.1179C61.9439 84.303 61.8514 84.5094 61.6663 84.5734C61.6236 84.5877 61.588 84.5948 61.5453 84.5948Z'
              fill='#F8FBF8'
            />
            <path
              d='M62.3993 86.6019L59.8301 83.7693L61.4812 84.0611L62.5488 82.78L62.3993 86.6019Z'
              fill='#F8FBF8'
            />
            <path
              d='M80.498 68.2895C80.441 68.2895 80.377 68.2753 80.32 68.2397L68.9115 61.6494C68.7407 61.5497 68.6838 61.3362 68.7834 61.1654C68.883 60.9946 69.0966 60.9377 69.2674 61.0373L80.6759 67.6276C80.8467 67.7273 80.9036 67.9408 80.804 68.1116C80.7399 68.2255 80.619 68.2895 80.498 68.2895Z'
              fill='#F8FBF8'
            />
            <path
              d='M82.6691 69.1863L78.8828 68.6739L80.3347 67.8412L80.3276 66.1687L82.6691 69.1863Z'
              fill='#F8FBF8'
            />
            <path
              d='M71.5588 45.9072C71.388 45.9072 71.2385 45.7862 71.21 45.6154C71.1744 45.4232 71.3026 45.2382 71.5018 45.2026L84.4761 42.918C84.6682 42.8825 84.8533 43.0106 84.8889 43.2098C84.9245 43.402 84.7963 43.587 84.5971 43.6226L71.6228 45.9072C71.6228 45.9072 71.5801 45.9072 71.5588 45.9072Z'
              fill='#F8FBF8'
            />
            <path
              d='M87.0098 42.8253L83.7716 44.8607L84.3481 43.295L83.2734 42.0139L87.0098 42.8253Z'
              fill='#F8FBF8'
            />
            <path
              d='M63.296 32.2137C63.2177 32.2137 63.1323 32.1852 63.0682 32.1283C62.9188 32.0002 62.8974 31.7795 63.0255 31.6301L71.4947 21.5382C71.6228 21.3887 71.8435 21.3674 71.9929 21.4955C72.1424 21.6236 72.1637 21.8442 72.0356 21.9937L63.5664 32.0856C63.4952 32.171 63.3956 32.2137 63.296 32.2137Z'
              fill='#F8FBF8'
            />
            <path
              d='M73.3806 19.8372L72.2134 23.4811L71.644 21.9082L70 21.6235L73.3806 19.8372Z'
              fill='#F8FBF8'
            />
            <path
              d='M41.0406 45.3943C40.0228 45.3943 39.1973 44.5688 39.1973 43.551C39.1973 42.5333 40.0228 41.7148 41.0406 41.7148C42.0583 41.7148 42.8768 42.5404 42.8768 43.551C42.8768 44.5616 42.0512 45.3943 41.0406 45.3943ZM41.0406 42.3981C40.4072 42.3981 39.8876 42.9176 39.8876 43.551C39.8876 44.1844 40.4072 44.704 41.0406 44.704C41.674 44.704 42.1935 44.1844 42.1935 43.551C42.1935 42.9176 41.674 42.3981 41.0406 42.3981Z'
              fill='#F8FBF8'
            />
            <path
              d='M41.0406 51.7781C40.0228 51.7781 39.1973 50.9525 39.1973 49.9348C39.1973 48.9171 40.0228 48.0986 41.0406 48.0986C42.0583 48.0986 42.8768 48.9242 42.8768 49.9348C42.8768 50.9454 42.0512 51.7781 41.0406 51.7781ZM41.0406 48.7819C40.4072 48.7819 39.8876 49.3014 39.8876 49.9348C39.8876 50.5682 40.4072 51.0878 41.0406 51.0878C41.674 51.0878 42.1935 50.5682 42.1935 49.9348C42.1935 49.3014 41.674 48.7819 41.0406 48.7819Z'
              fill='#F8FBF8'
            />
            <path
              d='M41.0406 58.1622C40.0228 58.1622 39.1973 57.3366 39.1973 56.3188C39.1973 55.3011 40.0228 54.4827 41.0406 54.4827C42.0583 54.4827 42.8768 55.3082 42.8768 56.3188C42.8768 57.3295 42.0512 58.1622 41.0406 58.1622ZM41.0406 55.1659C40.4072 55.1659 39.8876 55.6854 39.8876 56.3188C39.8876 56.9523 40.4072 57.4718 41.0406 57.4718C41.674 57.4718 42.1935 56.9523 42.1935 56.3188C42.1935 55.6854 41.674 55.1659 41.0406 55.1659Z'
              fill='#F8FBF8'
            />
            <path
              d='M41.0406 64.5462C40.0228 64.5462 39.1973 63.7206 39.1973 62.7029C39.1973 61.6852 40.0228 60.8667 41.0406 60.8667C42.0583 60.8667 42.8768 61.6923 42.8768 62.7029C42.8768 63.7135 42.0512 64.5462 41.0406 64.5462ZM41.0406 61.5499C40.4072 61.5499 39.8876 62.0695 39.8876 62.7029C39.8876 63.3363 40.4072 63.8558 41.0406 63.8558C41.674 63.8558 42.1935 63.3363 42.1935 62.7029C42.1935 62.0695 41.674 61.5499 41.0406 61.5499Z'
              fill='#F8FBF8'
            />
            <path
              d='M61.9998 69.9121H34.5496C34.3575 69.9121 34.208 69.7555 34.208 69.5705V36.7683C34.208 36.5762 34.3646 36.4267 34.5496 36.4267C34.7347 36.4267 34.8912 36.5833 34.8912 36.7683V69.2218H61.6582V32.2704H39.1899C38.9977 32.2704 38.8483 32.1138 38.8483 31.9288C38.8483 31.7437 39.0049 31.5872 39.1899 31.5872H62.0069C62.1991 31.5872 62.3486 31.7437 62.3486 31.9288V69.5705C62.3486 69.7627 62.192 69.9121 62.0069 69.9121H61.9998Z'
              fill='#F8FBF8'
            />
            <path
              d='M39.247 37.0886H35.7811C35.5889 37.0886 35.4395 36.9321 35.4395 36.747C35.4395 36.562 35.596 36.4054 35.7811 36.4054H38.9054V33.096C38.9054 32.9039 39.062 32.7544 39.247 32.7544C39.4321 32.7544 39.5887 32.911 39.5887 33.096V36.747C39.5887 36.9392 39.4321 37.0886 39.247 37.0886Z'
              fill='#F8FBF8'
            />
            <path
              d='M35.069 35.886C34.9836 35.886 34.8911 35.8504 34.827 35.7863C34.6918 35.6511 34.6918 35.4376 34.827 35.3024L37.8446 32.2848C37.9798 32.1495 38.1933 32.1495 38.3286 32.2848C38.4638 32.42 38.4638 32.6335 38.3286 32.7687L35.311 35.7863C35.2469 35.8504 35.1544 35.886 35.069 35.886Z'
              fill='#F8FBF8'
            />
            <path
              d='M55.9358 43.8146H45.0682C44.876 43.8146 44.7266 43.658 44.7266 43.473C44.7266 43.2879 44.8831 43.1313 45.0682 43.1313H55.9358C56.128 43.1313 56.2774 43.2879 56.2774 43.473C56.2774 43.658 56.1209 43.8146 55.9358 43.8146Z'
              fill='#F8FBF8'
            />
            <path
              d='M55.9358 50.1273H45.0682C44.876 50.1273 44.7266 49.9707 44.7266 49.7857C44.7266 49.6007 44.8831 49.4441 45.0682 49.4441H55.9358C56.128 49.4441 56.2774 49.6007 56.2774 49.7857C56.2774 49.9707 56.1209 50.1273 55.9358 50.1273Z'
              fill='#F8FBF8'
            />
            <path
              d='M55.9358 56.5541H45.0682C44.876 56.5541 44.7266 56.3975 44.7266 56.2125C44.7266 56.0274 44.8831 55.8708 45.0682 55.8708H55.9358C56.128 55.8708 56.2774 56.0274 56.2774 56.2125C56.2774 56.3975 56.1209 56.5541 55.9358 56.5541Z'
              fill='#F8FBF8'
            />
            <path
              d='M55.9358 63.2155H45.0682C44.876 63.2155 44.7266 63.0589 44.7266 62.8738C44.7266 62.6888 44.8831 62.5322 45.0682 62.5322H55.9358C56.128 62.5322 56.2774 62.6888 56.2774 62.8738C56.2774 63.0589 56.1209 63.2155 55.9358 63.2155Z'
              fill='#F8FBF8'
            />
          </svg>
        </div>
        <div className=' max-w-xs'>
          <h3 className='mobile sm:desktop text-black-white-100'>
            Mis je instrumenten? Interessante praktijkvoorbeelden?
          </h3>
        </div>
        <div className='mr-12'>
          <CustomButton color='home'>
            <span className='whitespace-nowrap pr-1'>Deel je kennis!</span>
            <ArrowRightIcon className='inline-block h-4 w-4 ' aria-hidden='true' />
          </CustomButton>
        </div>
      </div>

      <div className='sm:hidden h-24 bg-green-500 rounded-cl w-full'>
        <Link href='/'>
        <div className='flex h-full w-full items-center justify-start'>
        <div className='pl-4'>
        <svg width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="34.5" cy="34.5" r="34" fill="#035E46" stroke="#FDFDFD"/>
<path d="M33.9175 19.0332C33.7772 19.0332 33.667 18.9229 33.667 18.7826V9.50738C33.667 9.36708 33.7772 9.25684 33.9175 9.25684C34.0578 9.25684 34.1681 9.36708 34.1681 9.50738V18.7826C34.1681 18.9229 34.0578 19.0332 33.9175 19.0332Z" fill="#F8FBF8"/>
<path d="M33.9176 7.73828L34.9348 10.2337L33.9176 9.63743L32.9004 10.2337L33.9176 7.73828Z" fill="#F8FBF8"/>
<path d="M23.4138 23.0867C23.3437 23.0867 23.2735 23.0566 23.2234 22.9965L17.2604 15.8909C17.1702 15.7857 17.1852 15.6254 17.2905 15.5402C17.3957 15.45 17.556 15.465 17.6412 15.5702L23.6042 22.6758C23.6944 22.781 23.6794 22.9413 23.5742 23.0265C23.5291 23.0666 23.4689 23.0867 23.4138 23.0867Z" fill="#F8FBF8"/>
<path d="M16.3135 14.3777L18.6937 15.6304L17.5361 15.8309L17.1353 16.9383L16.3135 14.3777Z" fill="#F8FBF8"/>
<path d="M17.9723 32.9436C17.9723 32.9436 17.9422 32.9436 17.9272 32.9436L8.79222 31.3351C8.65692 31.31 8.56672 31.1797 8.58677 31.0444C8.61182 30.9091 8.74211 30.8139 8.8774 30.839L18.0123 32.4475C18.1476 32.4725 18.2378 32.6028 18.2178 32.7381C18.1977 32.8584 18.0925 32.9436 17.9723 32.9436Z" fill="#F8FBF8"/>
<path d="M7.09375 30.7738L9.7295 30.2075L8.96784 31.1045L9.37373 32.2119L7.09375 30.7738Z" fill="#F8FBF8"/>
<path d="M12.1094 48.6272C12.0242 48.6272 11.939 48.5821 11.8939 48.502C11.8237 48.3817 11.8638 48.2314 11.9841 48.1612L20.0166 43.5211C20.1369 43.4509 20.2872 43.491 20.3574 43.6113C20.4275 43.7316 20.3874 43.8819 20.2672 43.952L12.2346 48.5922C12.1946 48.6172 12.1545 48.6272 12.1094 48.6272Z" fill="#F8FBF8"/>
<path d="M10.5762 49.2637L12.2248 47.134L12.2198 48.3116L13.242 48.8979L10.5762 49.2637Z" fill="#F8FBF8"/>
<path d="M25.7293 59.777C25.6992 59.777 25.6741 59.777 25.6441 59.7619C25.5138 59.7168 25.4486 59.5715 25.4937 59.4412L28.6657 50.7222C28.7108 50.5919 28.8561 50.5268 28.9864 50.5719C29.1167 50.617 29.1818 50.7623 29.1367 50.8926L25.9648 59.6116C25.9297 59.7118 25.8295 59.777 25.7293 59.777Z" fill="#F8FBF8"/>
<path d="M25.1227 61.1901L25.0225 58.4993L25.7741 59.4012L26.9366 59.1958L25.1227 61.1901Z" fill="#F8FBF8"/>
<path d="M43.3328 59.5614C43.2326 59.5614 43.1324 59.4963 43.0973 59.3961L39.9254 50.677C39.8803 50.5468 39.9454 50.4014 40.0757 50.3563C40.206 50.3062 40.3513 50.3764 40.3964 50.5067L43.5683 59.2257C43.6134 59.356 43.5483 59.5013 43.418 59.5464C43.3879 59.5564 43.3629 59.5614 43.3328 59.5614Z" fill="#F8FBF8"/>
<path d="M43.9339 60.9746L42.125 58.9802L43.2875 59.1857L44.0392 58.2837L43.9339 60.9746Z" fill="#F8FBF8"/>
<path d="M56.6771 48.0813C56.637 48.0813 56.5919 48.0713 56.5518 48.0463L48.5192 43.4061C48.399 43.336 48.3589 43.1857 48.4291 43.0654C48.4992 42.9451 48.6495 42.905 48.7698 42.9752L56.8023 47.6153C56.9226 47.6855 56.9627 47.8358 56.8925 47.9561C56.8474 48.0362 56.7622 48.0813 56.6771 48.0813Z" fill="#F8FBF8"/>
<path d="M58.2059 48.7128L55.54 48.352L56.5623 47.7657L56.5573 46.5881L58.2059 48.7128Z" fill="#F8FBF8"/>
<path d="M50.3835 32.3221C50.2632 32.3221 50.158 32.237 50.138 32.1167C50.1129 31.9814 50.2031 31.8511 50.3434 31.8261L59.4783 30.2176C59.6136 30.1925 59.7439 30.2827 59.769 30.423C59.794 30.5583 59.7038 30.6886 59.5635 30.7136L50.4286 32.3221C50.4286 32.3221 50.3985 32.3221 50.3835 32.3221Z" fill="#F8FBF8"/>
<path d="M61.2626 30.1523L58.9826 31.5854L59.3885 30.483L58.6318 29.5811L61.2626 30.1523Z" fill="#F8FBF8"/>
<path d="M44.566 22.6809C44.5109 22.6809 44.4508 22.6608 44.4057 22.6208C44.3005 22.5306 44.2854 22.3752 44.3756 22.27L50.3386 15.1645C50.4288 15.0593 50.5842 15.0442 50.6894 15.1344C50.7946 15.2246 50.8097 15.38 50.7195 15.4852L44.7565 22.5907C44.7064 22.6508 44.6362 22.6809 44.566 22.6809Z" fill="#F8FBF8"/>
<path d="M51.6663 13.9668L50.8445 16.5324L50.4437 15.425L49.2861 15.2245L51.6663 13.9668Z" fill="#F8FBF8"/>
<path d="M28.8965 31.9613C28.1799 31.9613 27.5986 31.38 27.5986 30.6634C27.5986 29.9469 28.1799 29.3706 28.8965 29.3706C29.613 29.3706 30.1893 29.9519 30.1893 30.6634C30.1893 31.375 29.608 31.9613 28.8965 31.9613ZM28.8965 29.8517C28.4505 29.8517 28.0847 30.2175 28.0847 30.6634C28.0847 31.1094 28.4505 31.4752 28.8965 31.4752C29.3424 31.4752 29.7082 31.1094 29.7082 30.6634C29.7082 30.2175 29.3424 29.8517 28.8965 29.8517Z" fill="#F8FBF8"/>
<path d="M28.8965 36.4561C28.1799 36.4561 27.5986 35.8749 27.5986 35.1583C27.5986 34.4417 28.1799 33.8655 28.8965 33.8655C29.613 33.8655 30.1893 34.4467 30.1893 35.1583C30.1893 35.8699 29.608 36.4561 28.8965 36.4561ZM28.8965 34.3465C28.4505 34.3465 28.0847 34.7123 28.0847 35.1583C28.0847 35.6043 28.4505 35.9701 28.8965 35.9701C29.3424 35.9701 29.7082 35.6043 29.7082 35.1583C29.7082 34.7123 29.3424 34.3465 28.8965 34.3465Z" fill="#F8FBF8"/>
<path d="M28.8965 40.951C28.1799 40.951 27.5986 40.3697 27.5986 39.6532C27.5986 38.9366 28.1799 38.3604 28.8965 38.3604C29.613 38.3604 30.1893 38.9416 30.1893 39.6532C30.1893 40.3647 29.608 40.951 28.8965 40.951ZM28.8965 38.8414C28.4505 38.8414 28.0847 39.2072 28.0847 39.6532C28.0847 40.0991 28.4505 40.4649 28.8965 40.4649C29.3424 40.4649 29.7082 40.0991 29.7082 39.6532C29.7082 39.2072 29.3424 38.8414 28.8965 38.8414Z" fill="#F8FBF8"/>
<path d="M28.8965 45.4459C28.1799 45.4459 27.5986 44.8646 27.5986 44.148C27.5986 43.4315 28.1799 42.8552 28.8965 42.8552C29.613 42.8552 30.1893 43.4365 30.1893 44.148C30.1893 44.8596 29.608 45.4459 28.8965 45.4459ZM28.8965 43.3363C28.4505 43.3363 28.0847 43.7021 28.0847 44.148C28.0847 44.594 28.4505 44.9598 28.8965 44.9598C29.3424 44.9598 29.7082 44.594 29.7082 44.148C29.7082 43.7021 29.3424 43.3363 28.8965 43.3363Z" fill="#F8FBF8"/>
<path d="M43.6537 49.2239H24.3265C24.1912 49.2239 24.0859 49.1137 24.0859 48.9834V25.888C24.0859 25.7527 24.1962 25.6474 24.3265 25.6474C24.4567 25.6474 24.567 25.7577 24.567 25.888V48.7378H43.4131V22.721H27.5936C27.4583 22.721 27.3531 22.6108 27.3531 22.4805C27.3531 22.3502 27.4633 22.24 27.5936 22.24H43.6587C43.794 22.24 43.8992 22.3502 43.8992 22.4805V48.9834C43.8992 49.1187 43.7889 49.2239 43.6587 49.2239H43.6537Z" fill="#F8FBF8"/>
<path d="M27.634 26.1134H25.1936C25.0584 26.1134 24.9531 26.0032 24.9531 25.8729C24.9531 25.7426 25.0634 25.6324 25.1936 25.6324H27.3935V23.3023C27.3935 23.167 27.5037 23.0618 27.634 23.0618C27.7643 23.0618 27.8745 23.172 27.8745 23.3023V25.8729C27.8745 26.0082 27.7643 26.1134 27.634 26.1134Z" fill="#F8FBF8"/>
<path d="M24.692 25.2669C24.6318 25.2669 24.5667 25.2418 24.5216 25.1967C24.4264 25.1015 24.4264 24.9512 24.5216 24.856L26.6462 22.7313C26.7414 22.6361 26.8918 22.6361 26.987 22.7313C27.0822 22.8265 27.0822 22.9769 26.987 23.0721L24.8623 25.1967C24.8172 25.2418 24.7521 25.2669 24.692 25.2669Z" fill="#F8FBF8"/>
<path d="M39.3844 30.849H31.7327C31.5974 30.849 31.4922 30.7387 31.4922 30.6084C31.4922 30.4782 31.6024 30.3679 31.7327 30.3679H39.3844C39.5197 30.3679 39.6249 30.4782 39.6249 30.6084C39.6249 30.7387 39.5147 30.849 39.3844 30.849Z" fill="#F8FBF8"/>
<path d="M39.3844 35.2938H31.7327C31.5974 35.2938 31.4922 35.1836 31.4922 35.0533C31.4922 34.923 31.6024 34.8127 31.7327 34.8127H39.3844C39.5197 34.8127 39.6249 34.923 39.6249 35.0533C39.6249 35.1836 39.5147 35.2938 39.3844 35.2938Z" fill="#F8FBF8"/>
<path d="M39.3844 39.8187H31.7327C31.5974 39.8187 31.4922 39.7085 31.4922 39.5782C31.4922 39.4479 31.6024 39.3376 31.7327 39.3376H39.3844C39.5197 39.3376 39.6249 39.4479 39.6249 39.5782C39.6249 39.7085 39.5147 39.8187 39.3844 39.8187Z" fill="#F8FBF8"/>
<path d="M39.3844 44.5089H31.7327C31.5974 44.5089 31.4922 44.3986 31.4922 44.2684C31.4922 44.1381 31.6024 44.0278 31.7327 44.0278H39.3844C39.5197 44.0278 39.6249 44.1381 39.6249 44.2684C39.6249 44.3986 39.5147 44.5089 39.3844 44.5089Z" fill="#F8FBF8"/>
</svg>

        </div>
        <div className='text-black-white-100 pl-8'>
            <h3 className='mobile sm:desktop'>
                Nieuw thema? 
            </h3>
            <ArrowRightIcon className='block h-4 w-4 ' aria-hidden='true' />
        </div>
        </div>
        </Link>
      </div>
    </>
  );
}
