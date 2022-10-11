import * as React from 'react'
import { useEffect, useState, useCallback, useMemo } from 'react'
import { Routes, Route, useParams, useNavigate, useLocation } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Skeleton from '@mui/material/Skeleton'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import CloseIcon from '@mui/icons-material/Close'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import KeyboardCommandKeyTwoToneIcon from '@mui/icons-material/KeyboardCommandKeyTwoTone'
import CottageIcon from '@mui/icons-material/Cottage'

import AppError from '../components/AppError'
import Link from '../components/Link'
import Form from '../components/Form'
import ButtonRow from '../components/ButtonRow'
import ErrorMessage from '../components/ErrorMessage'
import { useQuery, useCommandOnMount } from '../cqrs.js'
import InspectObject from '../components/InspectObject'
// import { useCurrentAgent } from '../resources/auth'
// import LinkToDid from '../components/LinkToDid'
// import CopyButton from '../components/CopyButton'

export default function AuthPage({ APP_NAME }) {
  const location = useLocation()
  const name = location.pathname.split('/').reverse()[0]

  return <Container maxWidth={false} disableGutters>
    <Paper>
  ATUH PAGE
    </Paper>
  </Container>
}
