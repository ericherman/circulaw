import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/outline';
import CustomButton from './custom-button';
import aboutImage from '../public/home-page/homepageAboutDeco.png';

export default function HomePageAboutSection({ aboutSection }) {
  return (
    <Link href={`/about/${encodeURIComponent(aboutSection?.aboutSectionSlug)}`} name='about'>
      <div className='w-full sm:w-3/5 flex items-center justify-start border-b border-black-white-800 pb-4'>
        <div className='sm:hidden'>
          <svg
            width='42'
            height='42'
            viewBox='0 0 42 42'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='21' cy='21' r='21' fill='#035E46' />
            <path
              d='M16.1753 35.481C15.6961 35.481 15.2269 35.3379 14.8176 35.065C14.2751 34.7023 13.9058 34.1466 13.7793 33.5043L12.335 26.1765C11.1071 26.1931 9.9623 25.5908 9.31338 24.5525L8.55131 24.7455C8.08209 24.8653 7.5929 24.7954 7.1736 24.5458C6.75762 24.2963 6.46145 23.9036 6.33832 23.431C6.21852 22.9618 6.2884 22.4726 6.53798 22.0533C6.78424 21.634 7.18025 21.3378 7.6528 21.218L8.5147 20.9984C8.67111 19.5242 9.7593 18.2962 11.2169 17.9768L18.3184 16.416C18.4449 16.3894 18.5813 16.3694 18.7277 16.3561L25.3601 8.87852C25.4266 8.80531 25.5298 8.77203 25.6263 8.79866C25.7228 8.82528 25.796 8.90515 25.816 9.00165L29.7694 28.9619C29.7894 29.0617 29.7494 29.1615 29.6696 29.2214C29.5897 29.2813 29.4832 29.2946 29.3934 29.248L20.1055 24.6656C20.0555 24.6424 20.0156 24.6024 19.9923 24.5558L17.1304 25.1848L18.5813 32.5526C18.7078 33.1948 18.578 33.8471 18.2119 34.3895C17.8459 34.9319 17.2935 35.3013 16.6512 35.4278C16.4915 35.4577 16.3317 35.4744 16.172 35.4744L16.1753 35.481ZM12.5513 25.6374C12.6778 25.6374 12.7843 25.7272 12.8109 25.8503L14.2984 33.4045C14.3983 33.907 14.6878 34.3429 15.1104 34.6258C15.5364 34.912 16.0455 35.0118 16.5514 34.9153C17.0539 34.8155 17.4898 34.5259 17.7727 34.1C18.0589 33.674 18.162 33.1615 18.0622 32.659L16.5613 25.0384C16.5347 24.8986 16.6246 24.7588 16.7643 24.7289L19.9857 24.0201C20.009 24.0134 20.0322 24.0067 20.0555 24.0001L20.1121 23.9834C20.182 23.9635 20.2585 23.9768 20.3184 24.0134C20.3817 24.05 20.4249 24.1132 20.4382 24.1831L20.4516 24.2497L29.1438 28.5392L25.3967 9.62728L19.0472 16.7854C19.0006 16.8386 18.9374 16.8686 18.8675 16.8719C18.7011 16.8819 18.558 16.9019 18.4282 16.9318L11.3267 18.4926C10.0355 18.7754 9.08709 19.8969 9.02386 21.2214C9.0172 21.3378 8.93733 21.4343 8.82419 21.4643L7.77926 21.7305C7.44648 21.817 7.16361 22.0267 6.99057 22.3229C6.81419 22.619 6.76428 22.9651 6.8508 23.3012C6.93732 23.634 7.14697 23.9169 7.44315 24.0933C7.73932 24.2696 8.08542 24.3196 8.42152 24.233L9.37661 23.9901C9.49308 23.9602 9.61621 24.0134 9.67278 24.1199C10.2352 25.1515 11.3533 25.7472 12.528 25.6374C12.538 25.6374 12.5447 25.6374 12.5513 25.6374Z'
              fill='#1F2223'
            />
            <path
              d='M19.1159 16.5736L18.5947 16.6648L19.9626 24.4862L20.4838 24.3951L19.1159 16.5736Z'
              fill='#1F2223'
            />
            <path
              d='M9.02122 21.1542L8.50488 21.2698L9.18397 24.3029L9.70031 24.1873L9.02122 21.1542Z'
              fill='#1F2223'
            />
            <path
              d='M16.7634 24.7309L12.4932 25.6409L12.6034 26.1584L16.8736 25.2484L16.7634 24.7309Z'
              fill='#1F2223'
            />
            <path
              d='M28.1019 21.8035L28.012 21.2844C29.2999 21.0581 30.1651 19.8268 29.9388 18.539C29.7125 17.2511 28.4812 16.3859 27.1934 16.6122L27.1035 16.093C28.6776 15.8202 30.1851 16.8751 30.4613 18.4491C30.7375 20.0232 29.6792 21.5307 28.1052 21.8069L28.1019 21.8035Z'
              fill='#1F2223'
            />
            <path
              d='M32.1489 18.0499C32.0257 18.0499 31.9126 17.9601 31.8893 17.8336C31.8627 17.6905 31.9559 17.5507 32.099 17.5241L35.4268 16.8952C35.5699 16.8685 35.7096 16.9617 35.7362 17.1048C35.7629 17.2479 35.6697 17.3877 35.5266 17.4143L32.1988 18.0433C32.1988 18.0433 32.1655 18.0466 32.1489 18.0466V18.0499Z'
              fill='#1F2223'
            />
            <path
              d='M34.6482 28.2595C34.5982 28.2595 34.545 28.2462 34.5017 28.2129L31.6931 26.3194C31.5733 26.2395 31.54 26.0731 31.6232 25.9533C31.7064 25.8335 31.8694 25.8002 31.9892 25.8834L34.7979 27.777C34.9177 27.8568 34.951 28.0232 34.8678 28.143C34.8179 28.2196 34.7347 28.2595 34.6482 28.2595Z'
              fill='#1F2223'
            />
            <path
              d='M28.8415 10.6655C28.7849 10.6655 28.7284 10.6489 28.6818 10.6123C28.5653 10.5224 28.5453 10.356 28.6352 10.2429L30.7018 7.56068C30.7916 7.44421 30.958 7.42424 31.0711 7.51409C31.1876 7.60394 31.2076 7.77033 31.1177 7.88348L29.0512 10.5657C28.9979 10.6322 28.9214 10.6689 28.8415 10.6689V10.6655Z'
              fill='#1F2223'
            />
            <path
              d='M16.1734 35.4815C15.6942 35.4815 15.2249 35.3384 14.8156 35.0655C14.2732 34.7028 13.9038 34.1471 13.7773 33.5048L12.3331 26.177C11.1051 26.1936 9.96035 25.5913 9.31142 24.553L8.54936 24.746C8.08013 24.8658 7.59095 24.7959 7.17164 24.5463C6.75567 24.2968 6.45949 23.9041 6.33636 23.4315C6.21656 22.9623 6.28645 22.4731 6.53603 22.0538C6.78229 21.6345 7.1783 21.3383 7.65085 21.2185L8.51275 20.9989C8.66916 19.5247 9.75735 18.2967 11.2149 17.9772L18.3165 16.4165C18.4429 16.3899 18.5794 16.3699 18.7258 16.3566L25.3581 8.87901C25.4247 8.8058 25.5278 8.77252 25.6243 8.79915C25.7208 8.82577 25.7941 8.90563 25.814 9.00214L29.7675 28.9623C29.7874 29.0622 29.7475 29.162 29.6676 29.2219C29.5878 29.2818 29.4813 29.2951 29.3914 29.2485L20.1035 24.6661C20.0536 24.6428 20.0137 24.6029 19.9904 24.5563L17.1284 25.1853L18.5794 32.553C18.7058 33.1953 18.576 33.8476 18.21 34.39C17.8439 34.9324 17.2915 35.3018 16.6492 35.4283C16.4895 35.4582 16.3298 35.4749 16.17 35.4749L16.1734 35.4815ZM12.5494 25.6379C12.6758 25.6379 12.7823 25.7277 12.809 25.8508L14.2965 33.405C14.3963 33.9075 14.6858 34.3434 15.1085 34.6263C15.5344 34.9125 16.0436 35.0123 16.5494 34.9158C17.0519 34.816 17.4878 34.5264 17.7707 34.1005C18.0569 33.6745 18.1601 33.162 18.0602 32.6595L16.5594 25.0389C16.5328 24.8991 16.6226 24.7593 16.7624 24.7294L19.9837 24.0205C20.007 24.0139 20.0303 24.0072 20.0536 24.0006L20.1102 23.9839C20.18 23.964 20.2566 23.9773 20.3165 24.0139C20.3797 24.0505 20.423 24.1137 20.4363 24.1836L20.4496 24.2502L29.1418 28.5397L25.3947 9.62777L19.0453 16.7859C18.9987 16.8391 18.9354 16.8691 18.8656 16.8724C18.6992 16.8824 18.5561 16.9024 18.4263 16.9323L11.3247 18.4931C10.0336 18.7759 9.08513 19.8974 9.0219 21.2219C9.01525 21.3383 8.93538 21.4348 8.82224 21.4648L7.7773 21.731C7.44452 21.8175 7.16166 22.0272 6.98861 22.3234C6.81224 22.6195 6.76232 22.9656 6.84885 23.3017C6.93537 23.6345 7.14502 23.9174 7.4412 24.0938C7.73737 24.2701 8.08346 24.32 8.41957 24.2335L9.37465 23.9906C9.49113 23.9606 9.61425 24.0139 9.67083 24.1204C10.2332 25.152 11.3514 25.7477 12.5261 25.6379C12.5361 25.6379 12.5427 25.6379 12.5494 25.6379Z'
              fill='#F8FBF8'
            />
            <path
              d='M19.115 16.5739L18.5938 16.665L19.9616 24.4865L20.4828 24.3953L19.115 16.5739Z'
              fill='#F8FBF8'
            />
            <path
              d='M9.01731 21.1551L8.50098 21.2708L9.18006 24.3038L9.6964 24.1882L9.01731 21.1551Z'
              fill='#F8FBF8'
            />
            <path
              d='M16.7624 24.7326L12.4922 25.6426L12.6025 26.1601L16.8727 25.2501L16.7624 24.7326Z'
              fill='#F8FBF8'
            />
            <path
              d='M28.0989 21.8033L28.0091 21.2842C29.2969 21.0579 30.1622 19.8266 29.9359 18.5387C29.7096 17.2509 28.4783 16.3856 27.1904 16.6119L27.1006 16.0928C28.6746 15.8199 30.1821 16.8748 30.4583 18.4489C30.7346 20.0229 29.6763 21.5304 28.1023 21.8066L28.0989 21.8033Z'
              fill='#F8FBF8'
            />
            <path
              d='M32.1469 18.0511C32.0238 18.0511 31.9106 17.9613 31.8874 17.8348C31.8607 17.6917 31.9539 17.552 32.097 17.5253L35.4248 16.8964C35.5679 16.8698 35.7077 16.9629 35.7343 17.106C35.7609 17.2491 35.6677 17.3889 35.5246 17.4155L32.1968 18.0445C32.1968 18.0445 32.1636 18.0478 32.1469 18.0478V18.0511Z'
              fill='#F8FBF8'
            />
            <path
              d='M34.6472 28.2602C34.5973 28.2602 34.544 28.2469 34.5008 28.2136L31.6921 26.3201C31.5723 26.2402 31.539 26.0739 31.6222 25.9541C31.7054 25.8343 31.8685 25.801 31.9883 25.8842L34.7969 27.7777C34.9167 27.8576 34.95 28.024 34.8668 28.1438C34.8169 28.2203 34.7337 28.2602 34.6472 28.2602Z'
              fill='#F8FBF8'
            />
            <path
              d='M28.8396 10.6658C28.783 10.6658 28.7264 10.6491 28.6798 10.6125C28.5633 10.5227 28.5434 10.3563 28.6332 10.2431L30.6998 7.56092C30.7897 7.44445 30.956 7.42448 31.0692 7.51433C31.1857 7.60419 31.2056 7.77058 31.1158 7.88372L29.0492 10.5659C28.996 10.6325 28.9194 10.6691 28.8396 10.6691V10.6658Z'
              fill='#F8FBF8'
            />
          </svg>
        </div>
        <div className='-mt-2 hidden sm:block'>
          <svg
            width='107'
            height='107'
            viewBox='0 0 107 107'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='53.5' cy='53.5' r='53.5' fill='#035E46' />
            <path
              d='M41.2063 90.3918C39.9855 90.3918 38.7901 90.0272 37.7473 89.3321C36.3654 88.408 35.4243 86.9921 35.1022 85.3559L31.4227 66.6873C28.2943 66.7297 25.3779 65.1952 23.7247 62.5501L21.7832 63.0418C20.5878 63.347 19.3416 63.169 18.2734 62.5331C17.2136 61.8973 16.4591 60.8969 16.1454 59.693C15.8402 58.4976 16.0182 57.2513 16.6541 56.1831C17.2814 55.1149 18.2903 54.3603 19.4942 54.0551L21.69 53.4956C22.0885 49.7398 24.8608 46.6115 28.5741 45.7976L46.6661 41.8214C46.9883 41.7536 47.3359 41.7027 47.7089 41.6688L64.6056 22.6188C64.7751 22.4322 65.0379 22.3475 65.2838 22.4153C65.5297 22.4831 65.7162 22.6866 65.7671 22.9324L75.8389 73.7834C75.8898 74.0378 75.788 74.2921 75.5846 74.4447C75.3811 74.5973 75.1098 74.6312 74.8809 74.5125L51.2188 62.8383C51.0917 62.779 50.9899 62.6773 50.9306 62.5586L43.6395 64.1609L47.3359 82.9312C47.6581 84.5674 47.3274 86.2291 46.3948 87.611C45.4623 88.9929 44.0549 89.934 42.4187 90.2562C42.0117 90.3325 41.6048 90.3748 41.1978 90.3748L41.2063 90.3918ZM31.9738 65.3139C32.296 65.3139 32.5672 65.5428 32.6351 65.8565L36.4247 85.1015C36.6791 86.3817 37.4167 87.4923 38.4934 88.213C39.5785 88.9421 40.8757 89.1964 42.1643 88.9505C43.4445 88.6962 44.5551 87.9586 45.2758 86.8734C46.0049 85.7882 46.2677 84.4826 46.0133 83.2025L42.1898 63.7879C42.1219 63.4318 42.3508 63.0757 42.7069 62.9994L50.9136 61.1936C50.973 61.1767 51.0323 61.1597 51.0917 61.1427L51.2358 61.1004C51.4138 61.0495 51.6088 61.0834 51.7614 61.1767C51.9225 61.2699 52.0327 61.431 52.0666 61.609L52.1005 61.7786L74.245 72.7067L64.6988 24.5263L48.5228 42.7625C48.4041 42.8981 48.243 42.9744 48.065 42.9829C47.6411 43.0083 47.2766 43.0592 46.9459 43.1355L28.8539 47.1117C25.5644 47.8323 23.1482 50.6894 22.9871 54.0636C22.9702 54.3604 22.7667 54.6062 22.4784 54.6825L19.8164 55.3608C18.9686 55.5812 18.2479 56.1153 17.8071 56.8698C17.3577 57.6244 17.2306 58.5061 17.451 59.3624C17.6714 60.2102 18.2055 60.9308 18.9601 61.3801C19.7146 61.8295 20.5963 61.9566 21.4526 61.7362L23.8858 61.1173C24.1825 61.041 24.4962 61.1767 24.6403 61.4479C26.0731 64.0761 28.9217 65.5937 31.9144 65.3139C31.9399 65.3139 31.9568 65.3139 31.9738 65.3139Z'
              fill='#F8FBF8'
            />
            <path
              d='M48.6989 42.2236L47.3711 42.4558L50.8559 62.3819L52.1838 62.1496L48.6989 42.2236Z'
              fill='#F8FBF8'
            />
            <path
              d='M22.9795 53.8925L21.6641 54.187L23.3941 61.9141L24.7095 61.6196L22.9795 53.8925Z'
              fill='#F8FBF8'
            />
            <path
              d='M42.707 63.0049L31.8281 65.3232L32.1091 66.6416L42.9879 64.3233L42.707 63.0049Z'
              fill='#F8FBF8'
            />
            <path
              d='M71.5903 55.5474L71.3614 54.2248C74.6424 53.6483 76.8466 50.5115 76.2701 47.2305C75.6936 43.9495 72.5568 41.7452 69.2758 42.3217L69.0469 40.9991C73.057 40.304 76.8975 42.9915 77.6012 47.0016C78.3048 51.0117 75.6088 54.8522 71.5988 55.5559L71.5903 55.5474Z'
              fill='#F8FBF8'
            />
            <path
              d='M81.8994 45.9842C81.5857 45.9842 81.2975 45.7553 81.2381 45.4331C81.1703 45.0686 81.4077 44.7125 81.7722 44.6447L90.2502 43.0423C90.6148 42.9745 90.9709 43.2119 91.0387 43.5764C91.1065 43.941 90.8691 44.2971 90.5046 44.3649L82.0266 45.9672C82.0266 45.9672 81.9418 45.9757 81.8994 45.9757V45.9842Z'
              fill='#F8FBF8'
            />
            <path
              d='M88.2691 71.9945C88.1419 71.9945 88.0063 71.9606 87.8961 71.8759L80.7406 67.0519C80.4354 66.8484 80.3506 66.4245 80.5626 66.1193C80.7745 65.8141 81.19 65.7293 81.4952 65.9413L88.6506 70.7652C88.9558 70.9687 89.0406 71.3926 88.8286 71.6978C88.7015 71.8928 88.4895 71.9945 88.2691 71.9945Z'
              fill='#F8FBF8'
            />
            <path
              d='M73.4732 27.1715C73.3291 27.1715 73.1849 27.1291 73.0663 27.0359C72.7695 26.807 72.7187 26.3831 72.9476 26.0948L78.2124 19.2616C78.4413 18.9648 78.8652 18.914 79.1535 19.1429C79.4502 19.3718 79.501 19.7957 79.2721 20.0839L74.0073 26.9172C73.8717 27.0868 73.6767 27.18 73.4732 27.18V27.1715Z'
              fill='#F8FBF8'
            />
          </svg>
        </div>

        <h1 className='mobile sm:desktop pl-4 sm:pl-8 text-green-600 '>
          {aboutSection?.aboutSectionTitle}
        </h1>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-5 py-4 gap-x-8 gap-y-4 justify-between'>
        <div className='lg:col-span-3'>
          <div className='flex items-center justify-center block sm:hidden'>
            <div className='relative h-48 w-48 pt-4'>
              <Image src={aboutImage} fill alt='image for wat circulaw' />
            </div>
          </div>
          <p className='p-lg py-5 max-w-4xl hidden sm:block'>{aboutSection?.aboutSectionText}</p>
          <p className='p-lg py-5 max-w-4xl block sm:hidden'>
            {aboutSection?.aboutSectionMobileText}
          </p>
          <span className='text-green-500 link-lg link-interaction'>
            <CustomButton color='whiteBackground'>
              Lees verder{' '}
              <ArrowRightIcon className='inline-block h-4 w-4 ml-1' aria-hidden='true' />
            </CustomButton>
          </span>
        </div>
        <div className='lg:col-span-2 lg:justify-self-end'>
          <div className='relative h-96 w-96 ml-4 lg:-mt-32 flex items-center justify-center hidden sm:block'>
            <Image src={aboutImage} fill alt='image for wat circulaw' />
          </div>
        </div>
      </div>
    </Link>
  );
}
