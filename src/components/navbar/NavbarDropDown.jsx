import React from 'react'
import {DropdownMenu,  DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'


const NavbarDropDown = ({children}) => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {children}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-8">
        <DropdownMenuGroup>
              <DropdownMenuItem >
                <span>Light</span>
              </DropdownMenuItem>
              <DropdownMenuItem >
                <span>Dark</span>
              </DropdownMenuItem>
              <DropdownMenuItem >
                <span>System</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
  )
}

export default NavbarDropDown