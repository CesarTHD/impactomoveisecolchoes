'use client'
import { useContext, useEffect } from 'react'
import { AgnoContext } from '../../context/AgnoContext'
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  ArchiveBoxIcon,
  BoltIcon,
  CheckBadgeIcon,
  ClockIcon,
  QueueListIcon,
  ChartBarIcon,
  QuestionMarkCircleIcon,
  FolderArrowDownIcon,
  SparklesIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  PuzzlePieceIcon,
} from '@heroicons/react/20/solid'

import Link from 'next/link'
import { usePathname } from 'next/navigation'


const navigation = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  { name: 'Catálogo', href: '/dashboard/chart', icon: FolderArrowDownIcon },
  { name: 'Meus Eventos', href: '/dashboard/inbox', icon: FolderIcon },
  { name: 'Meus Destinos', href: '/dashboard/statistics', icon: ArchiveBoxIcon },
  { name: 'Integrações', href: '/dashboard/tasks', icon: PuzzlePieceIcon },
  { name: 'Payload Creator', href: '/dashboard/earnings', icon: SparklesIcon },
  { name: 'AI Chat SQL', href: '/dashboard/earnings', icon: ChatBubbleOvalLeftEllipsisIcon },
  { name: 'Dashboards', href: '/dashboard/earnings', icon: ChartBarIcon },
  { name: 'Registro de logs', href: '/dashboard/earnings', icon: ClockIcon },
  { name: 'Cookie & Consentimento', href: '/dashboard/earnings', icon: CheckBadgeIcon },
  { name: 'Automator R', href: '/dashboard/earnings', icon: BoltIcon },
  { name: 'Ajuda & Suporte', href: '/dashboard/earnings', icon: QuestionMarkCircleIcon },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  const { user, signOut } = useContext(AgnoContext)
  

  const handleSignOut = () => {
    signOut()
  }

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [loading, setLoading] = useState(true)


  const userNavigation = [
    {
      name: 'Your profile',
      href: '#',
      onClick: () => {
      },
    },
    {
      name: 'Sign out',
      href: '#',
      onClick: handleSignOut,
    },
  ]
  const pathname = usePathname();
  console.log(user, "aqui")

  useEffect(() => {
    if (user) {
      console.log(user, "user")
      setLoading(false)
    }
  }, [user])
  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                    <div className="flex h-16 shrink-0 items-center"></div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <Link href={item.href}>
                              <a
                                className={classNames(
                                  pathname.startsWith(item.href)
                                    ? 'bg-gray-50 text-indigo-600'
                                    : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                  'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                                )}
                              >
                                <item.icon
                                  className={classNames(
                                    pathname.startsWith(item.href)
                                      ? 'text-indigo-600'
                                      : 'text-gray-400 group-hover:text-indigo-600',
                                    'h-6 w-6 shrink-0',
                                  )}
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-60 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://firebasestorage.googleapis.com/v0/b/console-agnostic.appspot.com/o/agnosticdata-ai_6.6c3e41ac.svg?alt=media&token=82f17f3e-237c-4163-a344-8cba07dacf5b&_gl=1*s6tl4w*_ga*MTg2NjAyMzY2Ny4xNjY1NDM5MTE5*_ga_CW55HF8NVT*MTY4NTQ3OTY0Ny4xOS4xLjE2ODU0Nzk4OTkuMC4wLjA."
                alt="Your Company"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-3">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <Link href={item.href}>
                          <div
                            className={classNames(
                              pathname === item.href
                                ? 'bg-orange-100 text-orange-400'
                                : 'text-gray-700 hover:text-orange-400 hover:bg-gray-50',
                              'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                            )}
                          >
                            <item.icon
                              className={classNames(
                                pathname === item.href
                                  ? 'text-orange-400'
                                  : 'text-gray-400 group-hover:text-orange-500',
                                'h-6 w-6 shrink-0',
                              )}
                              aria-hidden="true"
                            />
                            {item.name}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <ul role="list" className="-mx-2 mt-2 space-y-1"></ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-60">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Separator */}
            <div
              className="h-6 w-px bg-gray-200 lg:hidden"
              aria-hidden="true"
            />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <form className="relative flex flex-1" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <MagnifyingGlassIcon
                  className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                  aria-hidden="true"
                />
                <input
                  id="search-field"
                  className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                  placeholder="Search..."
                  type="search"
                  name="search"
                />
              </form>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button
                  type="button"
                  className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Separator */}
                <div
                  className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"
                  aria-hidden="true"
                />

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <Menu.Button className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    {/* <img
                      className="h-8 w-8 rounded-full bg-gray-50"
                      src={user?.imageUrl}
                      alt={user?.firstName}
                    /> */}
                    {/* find */}
                    <h1 className='rounded-3xl p-2 bg-orange-200 text-orange-600'>CT</h1>
                    <span className="hidden lg:flex lg:items-center">
                      <span
                        className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                        aria-hidden="true"
                      >
                        {user?.firstName}
                      </span>
                      <ChevronDownIcon
                        className="ml-2 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              onClick={item.onClick}
                              className={classNames(
                                active ? 'bg-gray-50' : '',
                                'block px-3 py-1 text-sm leading-6 text-gray-900',
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <main className="bg-gray-200 h-[907px]">
            <div className="bg-white w-full">{children}</div>
          </main>
        </div>
      </div>
    </>
  )
}
