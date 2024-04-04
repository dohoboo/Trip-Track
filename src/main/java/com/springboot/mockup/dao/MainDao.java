package com.springboot.mockup.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.dao.DataAccessException;

import com.springboot.mockup.dto.ThemaDto;

@Mapper
public interface MainDao {
	
	@Select("select * from tbl_place_thema")
	public List<ThemaDto> selectAllPlaceThema() throws DataAccessException;

}
