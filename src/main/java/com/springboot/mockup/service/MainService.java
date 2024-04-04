package com.springboot.mockup.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.mockup.dao.MainDao;
import com.springboot.mockup.dto.ThemaDto;

@Service
public class MainService {
	private final MainDao mainDao;

	@Autowired
	public MainService(MainDao mainDao) {
		this.mainDao = mainDao;
	}

	public List<ThemaDto> getPlaceThema() {
		List<ThemaDto> thema = mainDao.selectAllPlaceThema();
		return thema;
	}

}
